import { db } from "../dbConfig";

export type Snippet = {
  id: number;
  title: string;
  code: string | null;
  description: string | null;
  tags: string[];
  favorite : number;
  created_at: number;
  updated_at: number;
};

export async function createSnippet(snippet : Snippet){
    await db.runAsync(`
        INSERT INTO snippets
        (title,code,description,tags,favorite,created_at,updated_at)
        VALUES(?,?,?,?,?,?,?)`,
        [
            snippet.title,
            snippet.code,
            snippet.description,
            JSON.stringify(snippet.tags),
            snippet.favorite,
            Date.now(),
            Date.now()
        ]
    );
}