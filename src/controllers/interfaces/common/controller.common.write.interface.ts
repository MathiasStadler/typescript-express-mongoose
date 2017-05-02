import express = require("express");
interface IWriteCommonController {
    create: express.RequestHandler;
    update: express.RequestHandler;
    delete: express.RequestHandler;
}

export default IWriteCommonController;
