// package: user
// file: user.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class CreateUserRequest extends jspb.Message { 
    getFirstName(): string;
    setFirstName(value: string): CreateUserRequest;

    getLastName(): string;
    setLastName(value: string): CreateUserRequest;

    getEmail(): string;
    setEmail(value: string): CreateUserRequest;

    getMobile(): string;
    setMobile(value: string): CreateUserRequest;

    getGender(): string;
    setGender(value: string): CreateUserRequest;

    getAddress(): string;
    setAddress(value: string): CreateUserRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateUserRequest): CreateUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateUserRequest;
    static deserializeBinaryFromReader(message: CreateUserRequest, reader: jspb.BinaryReader): CreateUserRequest;
}

export namespace CreateUserRequest {
    export type AsObject = {
        firstName: string,
        lastName: string,
        email: string,
        mobile: string,
        gender: string,
        address: string,
    }
}

export class CreateUserResponse extends jspb.Message { 
    getFirstName(): string;
    setFirstName(value: string): CreateUserResponse;

    getLastName(): string;
    setLastName(value: string): CreateUserResponse;

    getEmail(): string;
    setEmail(value: string): CreateUserResponse;

    getMobile(): string;
    setMobile(value: string): CreateUserResponse;

    getGender(): string;
    setGender(value: string): CreateUserResponse;

    getAddress(): string;
    setAddress(value: string): CreateUserResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateUserResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateUserResponse): CreateUserResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateUserResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateUserResponse;
    static deserializeBinaryFromReader(message: CreateUserResponse, reader: jspb.BinaryReader): CreateUserResponse;
}

export namespace CreateUserResponse {
    export type AsObject = {
        firstName: string,
        lastName: string,
        email: string,
        mobile: string,
        gender: string,
        address: string,
    }
}

export class GetUserRequest extends jspb.Message { 
    getEmail(): string;
    setEmail(value: string): GetUserRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetUserRequest): GetUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUserRequest;
    static deserializeBinaryFromReader(message: GetUserRequest, reader: jspb.BinaryReader): GetUserRequest;
}

export namespace GetUserRequest {
    export type AsObject = {
        email: string,
    }
}

export class GetUserResponse extends jspb.Message { 
    getFirstName(): string;
    setFirstName(value: string): GetUserResponse;

    getLastName(): string;
    setLastName(value: string): GetUserResponse;

    getEmail(): string;
    setEmail(value: string): GetUserResponse;

    getMobile(): string;
    setMobile(value: string): GetUserResponse;

    getGender(): string;
    setGender(value: string): GetUserResponse;

    getAddress(): string;
    setAddress(value: string): GetUserResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUserResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetUserResponse): GetUserResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUserResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUserResponse;
    static deserializeBinaryFromReader(message: GetUserResponse, reader: jspb.BinaryReader): GetUserResponse;
}

export namespace GetUserResponse {
    export type AsObject = {
        firstName: string,
        lastName: string,
        email: string,
        mobile: string,
        gender: string,
        address: string,
    }
}

export class UpdateUserRequest extends jspb.Message { 
    getFirstName(): string;
    setFirstName(value: string): UpdateUserRequest;

    getLastName(): string;
    setLastName(value: string): UpdateUserRequest;

    getEmail(): string;
    setEmail(value: string): UpdateUserRequest;

    getMobile(): string;
    setMobile(value: string): UpdateUserRequest;

    getGender(): string;
    setGender(value: string): UpdateUserRequest;

    getAddress(): string;
    setAddress(value: string): UpdateUserRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateUserRequest): UpdateUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateUserRequest;
    static deserializeBinaryFromReader(message: UpdateUserRequest, reader: jspb.BinaryReader): UpdateUserRequest;
}

export namespace UpdateUserRequest {
    export type AsObject = {
        firstName: string,
        lastName: string,
        email: string,
        mobile: string,
        gender: string,
        address: string,
    }
}

export class UpdateUserResponse extends jspb.Message { 
    getFirstName(): string;
    setFirstName(value: string): UpdateUserResponse;

    getLastName(): string;
    setLastName(value: string): UpdateUserResponse;

    getEmail(): string;
    setEmail(value: string): UpdateUserResponse;

    getMobile(): string;
    setMobile(value: string): UpdateUserResponse;

    getGender(): string;
    setGender(value: string): UpdateUserResponse;

    getAddress(): string;
    setAddress(value: string): UpdateUserResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateUserResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateUserResponse): UpdateUserResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateUserResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateUserResponse;
    static deserializeBinaryFromReader(message: UpdateUserResponse, reader: jspb.BinaryReader): UpdateUserResponse;
}

export namespace UpdateUserResponse {
    export type AsObject = {
        firstName: string,
        lastName: string,
        email: string,
        mobile: string,
        gender: string,
        address: string,
    }
}

export class DeleteUserRequest extends jspb.Message { 
    getEmail(): string;
    setEmail(value: string): DeleteUserRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteUserRequest): DeleteUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteUserRequest;
    static deserializeBinaryFromReader(message: DeleteUserRequest, reader: jspb.BinaryReader): DeleteUserRequest;
}

export namespace DeleteUserRequest {
    export type AsObject = {
        email: string,
    }
}
