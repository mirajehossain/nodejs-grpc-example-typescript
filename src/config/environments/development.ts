import { IConfigApp } from '../config.constraint';
import { dbConfig } from '../config';
export default {
    database: {
        host: dbConfig.host,
        username: dbConfig.username,
        password: dbConfig.password,
        database: dbConfig.database,

        dialect: 'postgres',
        logging: false,
        sync: {
            force: false,
            logging: false,
            alter: false,
        },
        define: {
            timestamps: true,
            underscored: true,
            freezeTableName: true,
            charset: 'utf8',
            schema: 'public',
        },
        timezone: 'UTC',
    },
} as IConfigApp;
