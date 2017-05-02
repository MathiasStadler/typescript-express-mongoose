import UserModel from '../models/model.user';
import IUserModel from './../models/interfaces/model.user.interface';
import UserSchema from '../connections/schemas/schema.user';
import RepositoryBase from './base/base.repository';

/**
 *
 *
 * @class UserRepository
 * @extends {RepositoryBase<IUserModel>}
 */
class UserRepository extends RepositoryBase<IUserModel> {
    constructor() {
        super(UserSchema);
    }
}

Object.seal(UserRepository);
// tslint:disable-next-line:no-default-export
export default UserRepository;
