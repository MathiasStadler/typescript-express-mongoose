import * as mongoose from 'mongoose';

/**
 *
 *
 * @interface IUser
 * @extends {mongoose.Document}
 */
interface IUser extends mongoose.Document {
    name: string;
    email: string;
    username: string;
    password: string;
}

// tslint:disable-next-line:export-name
export = IUser;
