import { Model, ModelCtor, Sequelize, FindOptions } from 'sequelize';

/**
 * Abstract class to be extended by models
 * declares the default structure of a model
 */
export abstract class BaseModel extends Model {
  public static readonly ModelName: string;
  public static readonly TableName: string;
  public static readonly DefaultScope: FindOptions = {};

  /**
   * Method to initialize the model
   */
  public static prepareInit(sequelize: Sequelize) {
    throw new Error('prepareInit not implemented');
  }

  /**
   * Method to set all needed associations for the model
   */
  public static setAssociations(modelCtors: {
    [modelName: string]: ModelCtor<BaseModel>;
  }) {
    throw new Error('setAssociations not implemented');
  }
}
