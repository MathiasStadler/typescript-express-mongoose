import * as express from 'express';
/**
 *
 *
 * @interface IReadCommonController
 */
export interface IReadCommonController {
    retrieve: express.RequestHandler;
    findById: express.RequestHandler;
}

