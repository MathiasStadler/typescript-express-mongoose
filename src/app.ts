import * as express from 'express';

import {MiddlewaresBase} from './config/middleware/base/base.mw';

/**
 *
 *
 * @class App
 */
// tslint:disable-next-line:export-name
export class App {

    // ref to Express instance
    public express: express.Application;

    //
    private port: number = 5000;

    // Run configuration methods on the Express instance.
    constructor() {

        const port = parseInt(process.env.PORT, 10) || 5000;
        this.express = express();
        //this.middleware();
        this.express.use(MiddlewaresBase.configuration);
        this.express.set('port', port);
        this.express.listen(port, () => {
            //            console.log("Node app is running at localhost:" + port);
        });
    }

    // Configure Express middleware.
    private middleware(): void {
        this.express.use(MiddlewaresBase.configuration);
    }
}

export default new App().express;
