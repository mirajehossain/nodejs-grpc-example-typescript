import 'dotenv/config';
import * as grpc from 'grpc';
import { protoIndex } from './proto';
import userHandler from './handlers/user';
import { getDatabase } from './database';
import logger from './helpers/logger';
import { host, hostUrl, port } from './config/config';
import { CreateNewUser, DeleteUser, GetUser, UpdateUser } from './client/user';

protoIndex();


type StartServerType = () => void;
export const startServer: StartServerType = (): void => {
    // create gRPC server
    const server: grpc.Server = new grpc.Server();

    getDatabase().then(() => {
        logger.info('Database is connected');
    }).catch(err => {
        logger.error('db err: ', err);
    });

    // register all the handler
    server.addService(userHandler.service, userHandler.handler);

    server.bindAsync(
        hostUrl,
        grpc.ServerCredentials.createInsecure(),
        (err: Error, port: number) => {
            if (err) {
                return logger.error(err);
            }
            logger.info(`gRPC listening on ${ port }`);
        },
    );
    // CreateNewUser();
    // UpdateUser();
    // GetUser();
    // DeleteUser();

    server.start();
};
