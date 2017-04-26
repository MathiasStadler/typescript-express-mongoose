import * as bodyParser from "body-parser";
import * as express from "express";
import * as logger from "morgan";
import * as path from "path";
import requestLogger = require("./../../logger/request.logger");
import MethodOverride = require("./../methodoveride.mw");
import BaseRoutes = require("./../../routes/base/base.routes");
import { Express } from "express-serve-static-core";

class MiddlewaresBase {

    static get configuration(): Express {
        const app = express();
        app.use(requestLogger);
        app.use(logger("dev"));
        app.use(bodyParser.json());
        app.use(MethodOverride.configuration());
        app.use(new BaseRoutes().routes);

        return app;
    }
}
Object.seal(MiddlewaresBase);
export = MiddlewaresBase;
