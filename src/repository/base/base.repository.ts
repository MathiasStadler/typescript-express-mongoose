import IRead = require("./../interfaces/base/read.interface");
import IWrite = require("./../interfaces/base/write.interfaces");
import IUserModel = require("./../../models/interfaces/model.user.interface");

import mongoose = require("mongoose");

class RepositoryBase<T extends mongoose.Document> implements IRead<T>, IWrite<T> {

    private model: mongoose.Model<mongoose.Document>;

    constructor(schemaModel: mongoose.Model<mongoose.Document>) {
        this.model = schemaModel;
    }

    public create(item: T, callback: (error: any, result: any) => void) {
        this.model.create(item, callback);
    }

    public retrieve(callback: (error: any, result: any) => void) {
        this.model.find({}, callback);
    }

    public update(id: string, item: T, callback: (error: any, result: any) => void) {
        this.model.update({ id: this.toObjectId(id) }, item, callback);
    }

    public delete(id: string, callback: (error: any, result: any) => void) {
        this.model.remove({ id: this.toObjectId(id) }, (err) => callback(err, null));
    }

    public findById(id: string, callback: (error: any, result: T) => void) {
        this.model.findById(id, callback);
    }

    private toObjectId(id: string): mongoose.Types.ObjectId {
        return mongoose.Types.ObjectId.createFromHexString(id);
    }
}

export = RepositoryBase;
