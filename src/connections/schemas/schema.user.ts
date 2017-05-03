import {DataAccess} from './../mongodb.connection';
import {IUserModel} from './../../models/interfaces/model.user.interface';
import { Model } from "mongoose";

const mongoose = DataAccess.mongooseInstance;
const mongooseConnection = DataAccess.mongooseConnection;

/**
 *
 *
 * @class UserSchema
 */
// tslint:disable-next-line:no-stateless-class
export class UserSchema {

    static get schema() {
        const schema = mongoose.Schema({
            email: {
                require: true,
                type: String

            },
            name: {
                type: String

            },
            password: {

                require: true,
                type: String

            },
            username: {
                require: true,
                type: String
            }
        });
        return schema;
    }

}

/*
// Sets the createdAt parameter equal to the current time
BookSchema.pre('save', next => {
  now = new Date();
  if(!this.createdAt) {
    this.createdAt = now;
  }
  next();
});

*/

export const schema: Model<IUserModel> = mongooseConnection.model<IUserModel>("Users", UserSchema.schema);
