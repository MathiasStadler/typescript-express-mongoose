import IReadCommonController = require("./../common/controller.common.read.interface");
import IWriteCommonController = require("./../common/controller.common.write.interface");
import IBaseBusiness = require("./../../../business/interfaces/base/business.base.interface");

interface IBaseController<T extends IBaseBusiness<any>> extends IReadCommonController, IWriteCommonController {

    // empty

}
export = IBaseController;
