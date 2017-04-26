/**
 *
 *
 * @interface IWriteCommonBusiness
 * @template T
 */
interface IWriteCommonBusiness<T> {
    create(item: T, callback: (error: any, result: any) => void): void;
    update(id: string, item: T, callback: (error: any, result: any) => void): void;
    delete(id: string, callback: (error: any, result: any) => void): void;

}

// tslint:disable-next-line:export-name
export default IWriteCommonBusiness;
