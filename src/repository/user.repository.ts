import UserModel = require("../models/model.user");
import IUserModel = require("./../models/interfaces/model.user.interface");
import UserSchema = require("./../connections/schemas/schema.user");
import RepositoryBase = require("./base/base.repository");

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
export = UserRepository;
