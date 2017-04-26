import DataAccess = require("./../mongodb.connection");
import IUserModel = require("./../../models/interfaces/model.user.interface");
import { Model } from "mongoose";

const mongoose = DataAccess.mongooseInstance;
const mongooseConnection = DataAccess.mongooseConnection;

class UserSchema {

    static get schema() {
        const schema = mongoose.Schema({
            email: {

                require: true,
                type: String,

            },
            name: {
                type: String,

            },
            password: {

                require: true,
                type: String,

            },
            username: {
                require: true,
                type: String,
            },
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

const schema: Model<IUserModel> = mongooseConnection.model<IUserModel>("Users", UserSchema.schema);

export = schema;
