/**
 *
 *
 * @interface IReadCommonBusiness
 * @template T
 */
interface IReadCommonBusiness<T> {
    retrieve(callback: (error: any, result: T) => void): void;
    findById(id: string, callback: (error: any, result: T) => void): void;

}

// tslint:disable:export-name no-default-export
export default IReadCommonBusiness;
