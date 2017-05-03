import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as logger from 'morgan';
import * as path from 'path';
import * as requestLogger from './../../logger/request.logger';
import {MethodOverride} from './../methodoveride.mw';
import {BaseRoutes} from './../../routes/base/base.routes';
import { Express } from 'express-serve-static-core';

/**
 *
 *
 * @class MiddlewaresBase
 */
// tslint:disable-next-line:no-stateless-class
// tslint:disable-next-line:export-name
export class MiddlewaresBase {

    static get configuration(): Express {
        const app = express();
        app.use(requestLogger);
        app.use(logger('dev'));
        app.use(bodyParser.json());
        app.use(MethodOverride.configuration());
        app.use(new BaseRoutes().routes);
        return app;
    }
}
Object.seal(MiddlewaresBase);

