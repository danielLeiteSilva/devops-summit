"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
class MongoRepository {
    constructor() {
        this.client = new mongodb_1.MongoClient(process.env.MONGO_URI || '');
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.db(process.env.DB_NAME);
        });
    }
    repository(collection) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield this.connect();
            const collections = yield db.listCollections({ name: collection }).toArray();
            if (collections.length === 0) {
                yield db.createCollection(collection);
                console.log(`Collection '${collection}' created successfully`);
            }
            else {
                console.log(`Collection '${collection}' already exists`);
            }
            return db.collection(collection);
        });
    }
}
exports.default = MongoRepository;
