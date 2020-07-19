import { Sequelize } from 'sequelize';
import {
    modelsLoader,
} from './models';
import db from '../config/environments/development';
class Database {
    public readonly modelCtors = modelsLoader();
    private readonly _sequelize: Sequelize = null;
    constructor() {
        // get database config
        const databaseConfig = db.database;
        this._sequelize = new Sequelize(databaseConfig);

        // init every model
        Object.keys(this.modelCtors).forEach(modelName => {
            this.modelCtors[modelName].prepareInit(this._sequelize);
        });

        // call (create) associations for each model
        Object.keys(this.modelCtors).forEach(modelName => {
            this.modelCtors[modelName].setAssociations(this.modelCtors);
        });

    }

    /**
     * connect & authenticate with the database
     */
    public async prepare() {
        try {
            // return await to catch error if thrown
            return await this._sequelize.authenticate();
        } catch (e) {
            return Promise.reject(e);
        }
    }

    /**
     * export the sequelize object
     */
    public get Sequelize() {
        return this._sequelize;
    }
}

export const getDatabase = async () => {
    const database = new Database();
    await database.prepare();
    return database;
};
