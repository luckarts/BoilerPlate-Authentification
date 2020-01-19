import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

/*
Methode create Database
 */
mysql
    .createConnection({
        "host": process.env.DATABASE_HOST,
        "port": 3306,
        "user": process.env.MYSQL_USER,
        "password": process.env.MYSQL_PASSWORD
    })
    .then((connection) => {
        connection
            .query(
                `CREATE DATABASE IF NOT EXISTS ${process.env.MYSQL_DATABASE};`
            )
            .then(() => {
                console.info("Database create or successfully checked");
                process.exit(0);
            });
    });
