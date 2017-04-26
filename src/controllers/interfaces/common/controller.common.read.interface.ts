import express = require("express");
interface IReadCommonController {
    retrieve: express.RequestHandler;
    findById: express.RequestHandler;
}
export = IReadCommonController;
