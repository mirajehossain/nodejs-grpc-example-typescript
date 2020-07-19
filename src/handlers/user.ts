import * as grpc from 'grpc';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';

import {
    CreateUserRequest,
    CreateUserResponse,
    DeleteUserRequest,
    GetUserRequest,
    GetUserResponse,
    UpdateUserRequest,
    UpdateUserResponse,
} from '../proto/user/user_pb';
import { UserService, IUserServer, UserClient } from '../proto/user/user_grpc_pb';

import { hostUrl } from '../config/config';
import logger from '../helpers/logger';
import { UserModel } from '../database/models';

class UserHandler implements IUserServer {

    createNewUser = async (call: grpc.ServerUnaryCall<CreateUserRequest>, callback: grpc.sendUnaryData<CreateUserResponse>): Promise<void> => {
       try {
           const { firstName, lastName, address, email, gender, mobile } = call.request.toObject();
           let error;

           if (!email || !firstName) {
               error = new Error('email and first name is required');
               // @ts-ignore
               error.code = grpc.status.INVALID_ARGUMENT;
               return callback(error, null);
           }

           const userIsExist = await UserModel.findOne({ where: { email } });
           if (userIsExist) {
               error = new Error('User already exist');
               // @ts-ignore
               error.code = grpc.status.ALREADY_EXISTS;
               return callback(error, null);
           }

           const userPayload = {
               first_name: firstName,
               last_name: lastName,
               email: email,
               mobile: mobile,
               gender: gender,
               address: address
           };

           const newUser = await UserModel.create(userPayload);

           const userResponse = new CreateUserResponse();
           userResponse.setFirstName(newUser.first_name);
           userResponse.setLastName(newUser.last_name);
           userResponse.setEmail(newUser.email);
           userResponse.setMobile(newUser.mobile);
           userResponse.setGender(newUser.gender);
           userResponse.setAddress(newUser.address);

           return callback(null, userResponse);

       } catch (e) {
           logger.error('error in create new user: ', e);
           e.code = grpc.status.INTERNAL;
           callback(e, null);
       }
    }

    updateUser = async (call: grpc.ServerUnaryCall<UpdateUserRequest>, callback: grpc.sendUnaryData<UpdateUserResponse>): Promise<void> => {
       try {
           const { firstName, lastName, address, email, gender, mobile } = call.request.toObject();
           let error;
           const resp: UpdateUserResponse = new UpdateUserResponse();


           if (!email) {
               error = new Error('email is required');
               // @ts-ignore
               error.code = grpc.status.INVALID_ARGUMENT;
               return callback(error, null);
           }

           const user = await UserModel.findOne({ where: { email } });
           if (!user) {
               error = new Error('User not found');
               // @ts-ignore
               error.code = grpc.status.NOT_FOUND;
               return callback(error, null);
           }

           if (firstName) { // @ts-ignore
               user.first_name = firstName;
           }
           if (lastName) { // @ts-ignore
               user.last_name = lastName;
           }
           if (gender) { // @ts-ignore
               user.gender = gender;
           }
           if (address) { // @ts-ignore
               user.address = address;
           }
           if (mobile) { // @ts-ignore
               user.mobile = mobile;
           }

           // update user
           await user.save();


           resp.setFirstName(user.first_name);
           resp.setLastName(user.last_name);
           resp.setEmail(user.email);
           resp.setMobile(user.mobile);
           resp.setGender(user.gender);
           resp.setAddress(user.address);

           return callback(null, resp);

       } catch (e) {
           logger.error('error in update user: ', e);
           e.code = grpc.status.INTERNAL;
           callback(e, null);
       }
    }

    getUser = async (call: grpc.ServerUnaryCall<GetUserRequest>, callback: grpc.sendUnaryData<GetUserResponse>): Promise<void> => {
       try {
           const { email } = call.request.toObject();
           let error;
           const resp: GetUserResponse = new GetUserResponse();

           if (!email) {
               error = new Error('email is required');
               // @ts-ignore
               error.code = grpc.status.INVALID_ARGUMENT;
               return callback(error, null);
           }

           const user = await UserModel.findOne({ where: { email } });
           if (!user) {
               error = new Error('User not found');
               // @ts-ignore
               error.code = grpc.status.NOT_FOUND;
               return callback(error, null);
           }


           resp.setFirstName(user.first_name);
           resp.setLastName(user.last_name);
           resp.setEmail(user.email);
           resp.setMobile(user.mobile);
           resp.setGender(user.gender);
           resp.setAddress(user.address);
           return callback(null, resp);

       } catch (e) {
           logger.error('error in get user: ', e);
           e.code = grpc.status.INTERNAL;
           callback(e, null);
       }
    }

    deleteUser = async (call: grpc.ServerUnaryCall<DeleteUserRequest>, callback: grpc.sendUnaryData<Empty>): Promise<void> => {
       try {
           const { email } = call.request.toObject();
           let error;

           if (!email) {
               error = new Error('email is required');
               // @ts-ignore
               error.code = grpc.status.INVALID_ARGUMENT;
               return callback(error, null);
           }

           const user = await UserModel.findOne({ where: { email } });
           if (!user) {
               error = new Error('User not found');
               // @ts-ignore
               error.code = grpc.status.NOT_FOUND;
               return callback(error, null);
           }

           await UserModel.destroy({ where: { email }});
           return callback(null, new Empty());

       } catch (e) {
           logger.error('error in create new user: ', e);
           e.code = grpc.status.INTERNAL;
           callback(e, null);
       }
    }
}

export default {
    service: UserService,                // Service interface
    handler: new UserHandler(),          // Service interface definitions
    client: new UserClient(hostUrl, grpc.credentials.createInsecure()),
};
