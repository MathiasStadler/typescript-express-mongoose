import * as express from 'express';
import {UserBusiness} from './../business/business.user';
import {IBaseController} from './interfaces/base/controller.base.interface';
import {IUserModel} from './../models/interfaces/model.user.interface';

/**
 *
 *
 * @class UserController
 * @implements {IBaseController<UserBusiness>}
 */
// tslint:disable-next-line:export-name
export class UserController implements IBaseController<UserBusiness> {

    public create(req: express.Request, res: express.Response): void {
        try {

            const user: IUserModel = req.body;
            const userBusiness = new UserBusiness();
            userBusiness.create(user, (error: any, result: any) => {
                if (error) { res.send({ error: 'error' }); } else {
                    res.send({ success: 'success' });
                }
            });
        } catch (e) {
            // tslint:disable-next-line:no-console
            console.log(e);
            res.send({ error: 'error in your request' });

        }
    }
    public update(req: express.Request, res: express.Response): void {
        try {
            const user: IUserModel = req.body;
            const _id: string = req.params._id;
            const userBusiness = new UserBusiness();
            userBusiness.update(_id, user, (error: any, result: any) => {
                if (error) { res.send({ error: 'error' }); } else {
                    res.send({ success: 'success' });
                }
            });
        } catch (e) {
            // tslint:disable-next-line:no-console
            console.log(e);
            res.send({ error: 'error in your request' });

        }
    }
    // tslint:disable-next-line:no-reserved-keywords
    public delete(req: express.Request, res: express.Response): void {
        try {

            const _id: string = req.params._id;
            const userBusiness = new UserBusiness();
            userBusiness.delete(_id, (error: any, result: any) => {
                if (error) { res.send({ error: 'error' }); } else {
                    res.send({ success: 'success' });
                }
            });
        } catch (e) {
            // tslint:disable-next-line:no-console
            console.log(e);
            res.send({ error: 'error in your request' });

        }
    }
    public retrieve(req: express.Request, res: express.Response): void {
        try {
            const userBusiness = new UserBusiness();
            userBusiness.retrieve((error: any, result: any) => {
                if (error) { res.send({ error: 'error' }); } else {
                    res.send(result);
                }
            });
        } catch (e) {
            // tslint:disable-next-line:no-console
            console.log(e);
            res.send({ error: 'error in your request' });

        }
    }
    public findById(req: express.Request, res: express.Response): void {
        try {

            const _id: string = req.params._id;
            const userBusiness = new UserBusiness();
            userBusiness.findById(_id, (error: any, result: any) => {
                if (error) { res.send({ error: 'error' }); } else { res.send(result); }
            });
        } catch (e) {
            // tslint:disable-next-line:no-console
            console.log(e);
            res.send({ error: 'error in your request' });

        }
    }
}

