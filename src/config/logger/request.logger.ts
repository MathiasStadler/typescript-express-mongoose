import * as express from 'express';

/**
 *
 *
 * @param {express.Request} request
 * @param {express.Response} response
 * @param {express.NextFunction} next
 */
const requestLogger: express.RequestHandler = (
    request: express.Request,
    response: express.Response,
    next: express.NextFunction,
) => {
    // tslint:disable-next-line:no-console
    console.info(`Log => ${(new Date()).toUTCString()}|${request.method}|${request.url}|${request.ip}`);
    next();
};

// tslint:disable-next-line:export-name
export = requestLogger;

// from here
// http://blog.theburge.co/web/2016/06/30/typescript-express-api.html
