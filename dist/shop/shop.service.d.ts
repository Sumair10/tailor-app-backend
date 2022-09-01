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
/// <reference types="mongoose/types/inferschematype" />
import { Model } from 'mongoose';
import { Shop } from './shop.schema';
export declare class ShopService {
    private readonly shopModel;
    constructor(shopModel: Model<Shop>);
    addShop(shop: any): Promise<{
        shop: Omit<import("mongoose").MergeType<Shop, import("mongoose").Document<unknown, any, Shop> & Shop & {
            _id: import("mongoose").Types.ObjectId;
        }>, "_id"> & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            _id: import("mongoose").Types.ObjectId;
        };
        status: string;
        message?: undefined;
    } | {
        status: string;
        message: string;
        shop?: undefined;
    }>;
    getAllShops(): Promise<(import("mongoose").Document<unknown, any, Shop> & Shop & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
}
