import * as express from "express";

import Middlewares = require("./config/middleware/base/base.mw");

class App {

    // ref to Express instance
    public express: express.Application;

    //
    private port: number = 5000;

    // Run configuration methods on the Express instance.
    constructor() {

        const port = parseInt(process.env.PORT, 10) || 5000;
        this.express = express();
        this.middleware();
        this.express.set("port", port);
        this.express.listen(port, () => {

            //            console.log("Node app is running at localhost:" + port);
        });
    }

    // Configure Express middleware.
    private middleware(): void {
        this.express.use(Middlewares.configuration);
    }
}

export default new App().express;
