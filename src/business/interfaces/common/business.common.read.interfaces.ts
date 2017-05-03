/**
 *
 *
 * @interface IReadCommonBusiness
 * @template T
 */
export interface IReadCommonBusiness<T> {
    retrieve(callback: (error: any, result: T) => void): void;
    findById(id: string, callback: (error: any, result: T) => void): void;

}

