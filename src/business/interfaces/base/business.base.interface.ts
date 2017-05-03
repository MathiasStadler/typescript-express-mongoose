// tslint:disable-next-line:import-name
import {IWriteCommonBusiness} from './../common/business.common.write.interfaces';

// tslint:disable-next-line:import-name
import {IReadCommonBusiness} from './../common/business.common.read.interfaces';

/**
 *
 *
 * @interface IBaseBusiness
 * @extends {IReadCommonBuisiness<T>}
 * @extends {IWriteCommonBusiness<T>}
 * @template T
 */
export interface IBaseBusiness<T> extends IReadCommonBusiness<T>, IWriteCommonBusiness<T> {
}
