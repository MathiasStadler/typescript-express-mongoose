import IReadCommonBuisiness = require("./../common/business.common.read.interfaces");
import IWriteCommonBusiness = require("./../common/business.common.write.interfaces");
interface IBaseBusiness<T> extends IReadCommonBuisiness<T>, IWriteCommonBusiness<T> {
}
export = IBaseBusiness;
