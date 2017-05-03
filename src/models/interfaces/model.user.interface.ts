import * as mongoose from 'mongoose';

/**
 *
 *
 * @interface IUser
 * @extends {mongoose.Document}
 */
export interface IUserModel extends mongoose.Document {
    name: string;
    email: string;
    username: string;
    password: string;
}
