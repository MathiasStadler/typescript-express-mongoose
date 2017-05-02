/**
 *
 *
 * @interface IRead
 * @template T
 */
interface IRead<T> {
    retrieve(callback: (error: any, result: any) => void): void;
    findById(id: string, callback: (error: any, result: T) => void): void;
}

export default IRead;
