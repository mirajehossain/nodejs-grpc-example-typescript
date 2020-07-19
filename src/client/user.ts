import userHandler from '../handlers/user';
import {
    CreateUserResponse, UpdateUserResponse, GetUserResponse, CreateUserRequest, DeleteUserRequest, GetUserRequest, UpdateUserRequest
} from '../proto/user/user_pb';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import logger from '../helpers/logger';

const client = userHandler.client;


export function CreateNewUser() {

    const user: CreateUserRequest = new CreateUserRequest();
    user.setFirstName('John');
    user.setLastName('Doe');
    user.setEmail('john@doe.com');
    user.setGender('Male');
    user.setMobile('01234567890');
    user.setAddress('Dhaka, Bangladesh');

    client.createNewUser(user, (err, res: CreateUserResponse) => {
        if (err) {
            logger.error('error: ', err);
            return err;
        }
        logger.info(`user created successfully with email: ${res.getEmail()}.....`);
        return res.toObject();
    });
}



export function UpdateUser() {

    const user: UpdateUserRequest = new UpdateUserRequest();
    user.setFirstName('John update');
    user.setEmail('john@doe.com');

    client.updateUser(user, (err, res: UpdateUserResponse) => {
        if (err) {
            logger.error('error: ', err);
            return err;
        }
        logger.info(`user updated successfully.......`);
        return res.toObject();
    });
}


export function GetUser() {

    const user: GetUserRequest = new GetUserRequest();
    user.setEmail('john@doe.com');

    client.getUser(user, (err, res: GetUserResponse) => {
        if (err) {
            logger.error('error: ', err);
            return err;
        }
        logger.info(`user fetched successfully.......`);
        return res.toObject();
    });
}


export function DeleteUser() {

    const user: DeleteUserRequest = new DeleteUserRequest();
    user.setEmail('john@doe.com');

    client.deleteUser(user, (err, res: Empty) => {
        if (err) {
            logger.error('error: ', err);
            return err;
        }
        logger.info(`user deleted successfully.......`);
        return res;
    });
}
