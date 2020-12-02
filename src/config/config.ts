import dotenv from 'dotenv';
dotenv.config();
// Mapper for environment variables
export const environment = process.env.NODE_ENV;
export const port = process.env.PORT || 50051;
export const host = process.env.HOST || 'localhost';
export const hostUrl = `${host}:${port}`;

export const dbConfig = {
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
};

export const logDirectory = process.env.LOG_DIR;
