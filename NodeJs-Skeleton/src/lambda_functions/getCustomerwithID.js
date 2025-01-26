const mysql = require('mysql2/promise');
require('dotenv').config();


async function mysqlConnection() {
    let pool;
    try {
        pool = mysql.createPool({
            host: process.env.HOST,
            user: process.env.USER,
            password: process.env.PASSWORD,
            database: process.env.DATABASE
        });

        // Test connection
        await pool.query('SELECT 1');
        console.log('MySQL connection established successfully');

        // Execute the main query
        const [results] = await pool.query('SELECT * FROM user WHERE df_id IS NULL');
        return results;

    } catch (error) {
        console.error('Database error:', error.message);
        throw error;
    }
}

mysqlConnection()
    .then(results => {
        console.log('Query results:', results);
    })
    .catch(error => {
        console.error('Error in main execution:', error);
        process.exit(1);
    });