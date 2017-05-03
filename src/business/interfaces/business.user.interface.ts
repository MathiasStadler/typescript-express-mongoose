import {IBaseBusiness} from './base/business.base.interface';
import {IUserModel} from './../../models/interfaces/model.user.interface';

// tslint:disable-next-line:no-empty-interface
/**
 *
 *
 * @interface IUserBusiness
 * @extends {BaseBusiness<IUserModel>}
 */
// tslint:disable:no-empty-interface
export interface IUserBusiness extends IBaseBusiness<IUserModel> {}
