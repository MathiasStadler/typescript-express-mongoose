import IUserModel from './interfaces/model.user.interface';

/**
 *
 *
 * @class UserModel
 */
class UserModel {

    private userModel: IUserModel;

    constructor(userModel: IUserModel) {
        this.userModel = userModel;
    }

    get name(): string {
        return this.userModel.name;
    }

    get username(): string {
        return this.userModel.username;
    }

    get email(): string {
        return this.userModel.email;
    }

    get password(): string {

        return this.userModel.password;
    }

}

Object.seal(UserModel);

// tslint:disable-next-line:no-default-export
export default UserModel;
