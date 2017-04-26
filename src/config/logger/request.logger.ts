import * as express from "express";

const requestLogger: express.RequestHandler = (
    request: express.Request,
    response: express.Response,
    next: express.NextFunction,
) => {
    // tslint:disable-next-line:no-console
    console.info(`Log => ${(new Date()).toUTCString()}|${request.method}|${request.url}|${request.ip}`);
    next();
};

export = requestLogger;

// from here
// http://blog.theburge.co/web/2016/06/30/typescript-express-api.html
