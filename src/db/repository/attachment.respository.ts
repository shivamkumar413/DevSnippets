import { db } from "../dbConfig";

export async function createAttachment(snippetId : number, path : string){
    await db.runAsync(`
        INSERT INTO attachments
        (snippet_id,path)
        VALUES(?,?)`,
        [
            snippetId,
            path
        ]
    );
}

export async function getAttachementsBySnippetId(snippetId : number) : Promise<string[]>{
    const result = await db.getAllAsync(`
        SELECT path FROM attachments
        WHERE snippet_id = ?`,
        [snippetId]
    );  

    return result.map((row : any) => row.path);
}

export async function deleteAttachmentById (id : number){
    const result = await db.runAsync(`
        DELETE FROM attachments
        WHERE id = ?`,
        [id]
    );

    return result;
}

