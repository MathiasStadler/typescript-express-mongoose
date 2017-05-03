import * as express from 'express';
/**
 *
 *
 * @interface IWriteCommonController
 */
export interface IWriteCommonController {
    create: express.RequestHandler;
    update: express.RequestHandler;
    delete: express.RequestHandler;
}
