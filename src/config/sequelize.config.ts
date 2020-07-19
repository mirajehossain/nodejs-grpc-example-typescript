/**
 * This file is only here to collect all database environments and give them back
 * for the migration process of the sequelize-cli
 */

/**
 * This file is only here to collect all database environments and give them back
 * for the migration process of the sequelize-cli
 */

import { default as dev } from './environments/development';

module.exports = {
  development: { ...dev.database },
  // production:{...production.database}, // add this if you have production configuration in the environments folder
};
