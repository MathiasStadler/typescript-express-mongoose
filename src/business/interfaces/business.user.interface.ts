import BaseBusiness from './base/business.base.interface';
import IUserModel from './../../models/interfaces/model.user.interface';

// tslint:disable-next-line:no-empty-interface
/**
 *
 *
 * @interface IUserBusiness
 * @extends {BaseBusiness<IUserModel>}
 */
interface IUserBusiness extends BaseBusiness<IUserModel> {

}
// tslint:disable-next-line:export-name
export = IUserBusiness;
