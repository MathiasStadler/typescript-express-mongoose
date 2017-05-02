// tslint:disable-next-line:import-name
import IWriteCommonBusiness from './../common/business.common.write.interfaces';

// tslint:disable-next-line:import-name
import IReadCommonBuisiness from './../common/business.common.read.interfaces';

/**
 *
 *
 * @interface IBaseBusiness
 * @extends {IReadCommonBuisiness<T>}
 * @extends {IWriteCommonBusiness<T>}
 * @template T
 */
interface IBaseBusiness<T> extends IReadCommonBuisiness<T>, IWriteCommonBusiness<T> {
}
// tslint:disable:export-name no-default-export
export default IBaseBusiness;
