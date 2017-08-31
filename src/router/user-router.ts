import { Router, Request, Response, NextFunction } from 'express';
import UserController from '../controllers/user/user-controller';
import { UserControllerInterface } from '../controllers/user/user-controller-interface';

class UserRouter {
    router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    // Rotas para "/user/"
    routes() {
        this.router.get('/', UserController.index);
        this.router.get('/add', UserController.add); // vai ser post...
        this.router.get('/delete', UserController.delete);
    }
}

export default new UserRouter().router;