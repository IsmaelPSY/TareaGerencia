import mysql from "mysql2/promise";

export const getAll = async() => {
    const conn = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'TareaGerencia',
        password: '123Admin@'
    });
    const [rows, fields] = await conn.execute('SELECT * FROM `actividad`');
    await conn.end();
    return rows
}
