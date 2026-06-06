import { db } from "./dbConfig";

export async function initializeDatabase(){
    await db.execAsync(`
        CREATE TABLE IF NOT EXISTS snippets(
            id integer PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            code TEXT,
            description TEXT,
            tags TEXT DEFAULT '[]',
            favorite INTEGER DEFAULT 0,
            created_at INTEGER NOT NULL,
            updated_at INTEGER NOT NULL
        )    
    `)


    await db.execAsync(`
        CREATE TABLE IF NOT EXISTS attachments(
            id integer PRIMARY KEY AUTOINCREMENT,
            snippet_id INTEGER NOT NULL,
            path TEXT NOT NULL,
            FOREIGN KEY (snippet_id)
                REFERENCES snippets(id)
                ON DELETE CASCADE
        )
    `)
}