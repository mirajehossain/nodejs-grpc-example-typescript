import { DataTypes, FindOptions, Model, ModelCtor, Sequelize } from 'sequelize';
import { BaseModel } from './base';

export interface IUser {

    id?: number;
    first_name: string;
    last_name: string;
    mobile: string;
    email: string;
    gender: string;
    address: string;
    created_at?: Date;
    updated_at?: Date;
}
export class UserModel extends BaseModel implements IUser {
    public static readonly ModelName: string = 'users';
    public static readonly TableName: string = 'users';
    public static readonly DefaultScope: FindOptions = {};

    id?: number;
    first_name: string;
    last_name: string;
    mobile: string;
    email: string;
    gender: string;
    address: string;
    created_at?: Date;
    updated_at?: Date;

    public static attributes = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
        },
        first_name: {
            type: DataTypes.STRING,
        },
        last_name: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        },
        mobile: {
            type: DataTypes.STRING,
        },
        gender: {
            type: DataTypes.STRING,
        },
        address: {
            type: DataTypes.STRING,
        },
        created_at: {
            type: DataTypes.DATE,
        },
        updated_at: {
            type: DataTypes.DATE,
        }
    };

    public static prepareInit(sequelize: Sequelize) {
        this.init(
            this.attributes,
            {
                sequelize: sequelize,
                tableName: this.TableName,
                modelName: this.ModelName,
                defaultScope: this.DefaultScope,
                underscored: true
            },
        );
    }

    public static setAssociations(modelCtors: { [modelName: string]: ModelCtor<Model>; }) {
        // place to set model associations
    }
}
