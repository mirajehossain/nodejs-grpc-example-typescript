import { QueryInterface } from 'sequelize';
import { UserModel } from '../models';

/**
 * function that sequelize-cli runs if you want to add this migration to your database
 */
export async function up(query: QueryInterface) {
  try {
    return query.createTable(UserModel.TableName, UserModel.attributes);
  } catch (e) {
    return Promise.reject(e);
  }
}

/**
 * function that sequelize-cli runs if you want to remove this migration from your database
 */
export async function down(query: QueryInterface) {
  try {
    return query.dropTable(UserModel.TableName);
  } catch (e) {
    return Promise.reject(e);
  }
}
