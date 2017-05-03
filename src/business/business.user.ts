import {UserRepository} from './../repository/user.repository';
import {IUserBusiness} from './interfaces/business.user.interface';
import {IUserModel} from './../models/interfaces/model.user.interface';
import {UserModel} from './../models/model.user';

/**
 *
 *
 * @class UserBusiness
 * @implements {IUserBusiness}
 */
// tslint:disable-next-line:export-name
export class UserBusiness implements IUserBusiness {
    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    public create(item: IUserModel, callback: (error: any, result: any) => void) {
        this.userRepository.create(item, callback);
    }

    public retrieve(callback: (error: any, result: any) => void) {
        this.userRepository.retrieve(callback);
    }

    public update(id: string, item: IUserModel, callback: (error: any, result: any) => void) {

        this.userRepository.findById(id, (err: any, res: any) => {
            if (err) {
                callback(err, res);
            } else {
                this.userRepository.update(res.id, item, callback);
            }
        });
    }

    // tslint:disable-next-line:no-reserved-keywords
    public delete(id: string, callback: (error: any, result: any) => void) {
        this.userRepository.delete(id, callback);
    }

    public findById(id: string, callback: (error: any, result: IUserModel) => void) {
        this.userRepository.findById(id, callback);
    }

}

Object.seal(UserBusiness);
