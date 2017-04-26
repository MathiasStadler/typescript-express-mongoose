import BaseBusiness = require("./base/business.base.interface");
import IUserModel = require("./../../models/interfaces/model.user.interface");

// tslint:disable-next-line:no-empty-interface
interface IUserBusiness extends BaseBusiness<IUserModel> {

}
export = IUserBusiness;
