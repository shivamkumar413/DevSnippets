import { db } from "../dbConfig";
import { getAttachementsBySnippetId } from "./attachment.respository";

export type Snippet = {
  id: number;
  title: string | null;
  code: string | null;
  description: string | null;
  tags: string[];
  favorite : number;
  created_at: number;
  updated_at: number;
};

export type SnippetWithAttachment = {
    id: number;
    title: string | null;
    code: string | null;
    description: string | null;
    tags: string[];
    favorite : number;
    created_at: number;
    updated_at: number;
    attachments : Promise<string[]>
}


export type UpdateSnippet = Partial<Omit<Snippet, "id" | "created_at" | "updated_at">> & {
  id: number;
};

export async function createSnippet(){
    const snippet = await db.runAsync(`
        INSERT INTO snippets
        (created_at,updated_at)
        VALUES(?,?)`,
        [
            Date.now(),
            Date.now()
        ]
    );

    return snippet.lastInsertRowId;
}

export async function updateSnippet(snippet : UpdateSnippet){
    const fields : string[] = [];
    const values : (string | number | null)[] = [];

    if(snippet.title !== undefined){
        fields.push("title = ?");
        values.push(snippet.title);
    }

    if(snippet.code !== undefined){
        fields.push("code = ?");
        values.push(snippet.code);
    }

    if(snippet.description !== undefined){
        fields.push("description = ?");
        values.push(snippet.description);
    }

    if(snippet.tags !== undefined){
        fields.push("tags = ?");
        values.push(JSON.stringify(snippet.tags));
    }

    if(snippet.favorite !== undefined){
        fields.push("favorite = ?");
        values.push(snippet.favorite);
    }

    if(fields.length === 0){
        return;
    }

    fields.push("updated_at = ?");
    values.push(Date.now(), snippet.id);

    await db.runAsync(`
        UPDATE snippets
        SET ${fields.join(", ")}
        WHERE id = ?`,
        values
    );
}

export async function deleteSnippet(id : number){
    await db.runAsync(`
        DELETE FROM snippets
        WHERE id = ?`,
        [id]
    );
    
}

export async function getFiveLatestSnippets (): Promise<Snippet[]>{
    const result = await db.getAllAsync(`
        SELECT * FROM snippets
        ORDER BY created_at ASC
        LIMIT 10
    `);

    return result.map((row : any) => ({
        id: row.id,
        title: row.title,
        code: row.code,
        description: row.description,
        tags: JSON.parse(row.tags),
        favorite: row.favorite,
        created_at: row.created_at,
        updated_at: row.updated_at
    }));
}

export async function getAllSnippets() : Promise<Snippet[]>{
    const result = await db.getAllAsync(`
        SELECT * FROM snippets
        ORDER BY created_at ASC
    `);

    return result.map((row : any) => ({
        id: row.id,
        title: row.title,
        code: row.code,
        description: row.description,
        tags: JSON.parse(row.tags),
        favorite: row.favorite,
        created_at: row.created_at,
        updated_at: row.updated_at
    }));
}

export async function getSnippetById(id : number) : Promise<SnippetWithAttachment>{
    const snippet : Snippet | null= await db.getFirstAsync(`
        SELECT * FROM snippets
        WHERE id = ?`,
        [id]
    );

    if(!snippet){
        throw new Error("Snippet not found");
    }

    const attachments = getAttachementsBySnippetId(snippet.id);

    return {
        id: snippet.id,
        title: snippet.title,
        code: snippet.code,
        description: snippet.description,
        tags: snippet.tags,
        favorite: snippet.favorite,
        created_at: snippet.created_at,
        updated_at: snippet.updated_at,
        attachments: attachments
    };
}
