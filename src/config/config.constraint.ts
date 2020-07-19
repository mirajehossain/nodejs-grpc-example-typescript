import { Options } from 'sequelize';

/**
 * this file is here to get a typed environment
 *
 */
export type EnvironmentType = 'development' | 'production' | 'test';

export interface IConfigApp {
  database: IDatabaseConfiguration;
}

// make it independent from Options interface in application
interface IDatabaseConfiguration extends Options {}
