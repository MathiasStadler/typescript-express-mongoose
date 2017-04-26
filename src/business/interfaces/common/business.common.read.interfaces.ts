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

// tslint:disable-next-line:export-name
// tslint:disable-next-line:no-default-export
export default IReadCommonBusiness;
