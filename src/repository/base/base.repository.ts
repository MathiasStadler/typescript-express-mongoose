import  IRead  from './../interfaces/base/read.interface';
import  IWrite from './../interfaces/base/write.interfaces';
import  IUserModel from  './../../models/interfaces/model.user.interface';

import * as mongoose from 'mongoose';

/**
 *
 *
 * @class RepositoryBase
 * @implements {IRead<T>}
 * @implements {IWrite<T>}
 * @template T
 */
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

    // tslint:disable-next-line:no-reserved-keywords
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

// tslint:disable-next-line:export-name
export default RepositoryBase;
