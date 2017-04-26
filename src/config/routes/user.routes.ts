import * as express from "express";
import { Express, Router } from "express-serve-static-core";
import UserController = require("./../../controllers/controller.user");
import ServerMessages = require("./../../config/constants/server.messages.constants");

const router: Router = express.Router();

class UserRoutes {
    private userController: UserController;

    constructor() {
        this.userController = new UserController();
    }
    get routes(): Router {
        const controller = this.userController;
        router.get("/", (req: any, res: any) => {
            res.send(ServerMessages.INVALID_ENDPOINT);
        });
        router.get("/user", controller.retrieve);
        router.post("/user", controller.create);
        router.put("/user/:_id", controller.update);
        router.get("/user/:_id", controller.findById);
        router.delete("/user/:_id", controller.delete);
        return router;
    }
}

Object.seal(UserRoutes);
export = UserRoutes;
