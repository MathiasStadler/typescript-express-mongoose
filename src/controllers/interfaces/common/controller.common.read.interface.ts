import * as express from 'express';
/**
 *
 *
 * @interface IReadCommonController
 */
interface IReadCommonController {
    retrieve: express.RequestHandler;
    findById: express.RequestHandler;
}
export default IReadCommonController;
