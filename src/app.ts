import logger from './helpers/logger';
import { startServer } from './server';

process.on('uncaughtException', e => {
  logger.error(e);
});

startServer();
