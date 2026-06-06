import * as SQLITE from 'expo-sqlite'

export const db = SQLITE.openDatabaseSync('devsnippets')