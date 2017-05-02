import IReadCommonController from './../common/controller.common.read.interface';
import IWriteCommonController from './../common/controller.common.write.interface';
import  IBaseBusiness from './../../../business/interfaces/base/business.base.interface';

/**
 *
 *
 * @interface IBaseController
 * @extends {IReadCommonController}
 * @extends {IWriteCommonController}
 * @template T
 */
interface IBaseController<T extends IBaseBusiness<any>> extends IReadCommonController, IWriteCommonController {

    // empty

}
export default IBaseController;
