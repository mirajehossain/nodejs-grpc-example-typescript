// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var user_pb = require('./user_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_CreateUserRequest(arg) {
  if (!(arg instanceof user_pb.CreateUserRequest)) {
    throw new Error('Expected argument of type user.CreateUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_CreateUserRequest(buffer_arg) {
  return user_pb.CreateUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_CreateUserResponse(arg) {
  if (!(arg instanceof user_pb.CreateUserResponse)) {
    throw new Error('Expected argument of type user.CreateUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_CreateUserResponse(buffer_arg) {
  return user_pb.CreateUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_DeleteUserRequest(arg) {
  if (!(arg instanceof user_pb.DeleteUserRequest)) {
    throw new Error('Expected argument of type user.DeleteUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_DeleteUserRequest(buffer_arg) {
  return user_pb.DeleteUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_GetUserRequest(arg) {
  if (!(arg instanceof user_pb.GetUserRequest)) {
    throw new Error('Expected argument of type user.GetUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_GetUserRequest(buffer_arg) {
  return user_pb.GetUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_GetUserResponse(arg) {
  if (!(arg instanceof user_pb.GetUserResponse)) {
    throw new Error('Expected argument of type user.GetUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_GetUserResponse(buffer_arg) {
  return user_pb.GetUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_UpdateUserRequest(arg) {
  if (!(arg instanceof user_pb.UpdateUserRequest)) {
    throw new Error('Expected argument of type user.UpdateUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_UpdateUserRequest(buffer_arg) {
  return user_pb.UpdateUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_UpdateUserResponse(arg) {
  if (!(arg instanceof user_pb.UpdateUserResponse)) {
    throw new Error('Expected argument of type user.UpdateUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_UpdateUserResponse(buffer_arg) {
  return user_pb.UpdateUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserService = exports.UserService = {
  createNewUser: {
    path: '/user.User/CreateNewUser',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.CreateUserRequest,
    responseType: user_pb.CreateUserResponse,
    requestSerialize: serialize_user_CreateUserRequest,
    requestDeserialize: deserialize_user_CreateUserRequest,
    responseSerialize: serialize_user_CreateUserResponse,
    responseDeserialize: deserialize_user_CreateUserResponse,
  },
  getUser: {
    path: '/user.User/GetUser',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.GetUserRequest,
    responseType: user_pb.GetUserResponse,
    requestSerialize: serialize_user_GetUserRequest,
    requestDeserialize: deserialize_user_GetUserRequest,
    responseSerialize: serialize_user_GetUserResponse,
    responseDeserialize: deserialize_user_GetUserResponse,
  },
  updateUser: {
    path: '/user.User/UpdateUser',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.UpdateUserRequest,
    responseType: user_pb.UpdateUserResponse,
    requestSerialize: serialize_user_UpdateUserRequest,
    requestDeserialize: deserialize_user_UpdateUserRequest,
    responseSerialize: serialize_user_UpdateUserResponse,
    responseDeserialize: deserialize_user_UpdateUserResponse,
  },
  deleteUser: {
    path: '/user.User/DeleteUser',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.DeleteUserRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_user_DeleteUserRequest,
    requestDeserialize: deserialize_user_DeleteUserRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.UserClient = grpc.makeGenericClientConstructor(UserService);
