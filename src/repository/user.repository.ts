import {UserModel} from '../models/model.user';
import {IUserModel} from './../models/interfaces/model.user.interface';
import {schema} from '../connections/schemas/schema.user';
import {RepositoryBase} from './base/base.repository';

/**
 *
 *
 * @class UserRepository
 * @extends {RepositoryBase<IUserModel>}
 */
// tslint:disable-next-line:export-name
export class UserRepository extends RepositoryBase<IUserModel> {
    constructor() {
        super(schema);
    }
}

Object.seal(UserRepository);
