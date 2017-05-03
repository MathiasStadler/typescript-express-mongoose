import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as logger from 'morgan';
import * as path from 'path';

import {ServerMessages} from './../../../config/constants/server.messages.constants';
import {UserRoutes} from './../user.routes';

import { Express } from 'express-serve-static-core';

const app = express();
/**
 *
 *
 * @class BaseRoutes
 */
// tslint:disable-next-line:export-name
export class BaseRoutes {
    get routes(): Express {
        app.get('/', (req: any, res: any) => {
            res.send(ServerMessages.INVALID_ENDPOINT);
        });
        app.use('/api/v1', new UserRoutes().routes);
        app.get('*', (req: any, res: any) => {
            res.send(ServerMessages.INVALID_ENDPOINT);
        });
        return app;
    }
}

