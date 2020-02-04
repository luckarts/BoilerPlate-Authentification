require("dotenv").config();

module.exports = {
    "development": {
        "username": process.env.MYSQL_USER,
        "password": process.env.MYSQL_PASSWORD,
        "database": process.env.MYSQL_DATABASE,
        "host": process.env.DATABASE_HOST,
        "dialect": "mysql",
        "jwt_secret": process.env.JWT_SECRET,
        "logging": true
    },
    "test": {
        "username": process.env.MYSQL_USER,
        "password": process.env.MYSQL_PASSWORD,
        "database": process.env.MYSQL_DATABASE,
        "host": process.env.DATABASE_HOST,
        "jwt_secret": process.env.JWT_SECRET,
        "dialect": "mysql",
        "logging": true
    },
    "production": {
        "username": process.env.MYSQL_USER,
        "password": process.env.MYSQL_PASSWORD,
        "database": process.env.MYSQL_DATABASE,
        "host": process.env.DATABASE_HOST,
        "jwt_secret": process.env.JWT_SECRET,
        "dialect": "mysql",
        "logging": true
    }
};
