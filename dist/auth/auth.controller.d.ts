/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { Auth } from './auth.schema';
import { AuthService } from './auth.service';
import { Request } from 'express';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    getAllUsersOfApp(): Promise<(import("mongoose").Document<unknown, any, Auth> & Auth & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    getAllUsersByOrgId(orgId: string): Promise<any>;
    signup(request: Request): Promise<any>;
    login(email: string, password: string): Promise<{
        userExist: import("mongoose").Document<unknown, any, Auth> & Auth & {
            _id: import("mongoose").Types.ObjectId;
        };
        token: any;
    }>;
    forgetPassword(email: string): Promise<void>;
    updatePassword(email: string, password: string, newPassword: string): Promise<void>;
    addUserViaEmail(email: string, organizationId: string): Promise<any>;
    resetPassword(email: string, password: string): Promise<void>;
    editProfile(userId: String, userData: any): Promise<{
        userExist: any;
    }>;
    getSingleUser(userId: string): Promise<import("mongoose").Document<unknown, any, Auth> & Auth & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
