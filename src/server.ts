import * as express from "express";
import {Router, Request, Response, NextFunction} from "express";

// import Routes
import UserRouter from './router/user-router';
import ProductsRouter from './router/product-router';

class Server {
    "use strict";
    public app:express.Application;
    
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    public config() {
    }

    public routes():void {
        let router: express.Router;
            router = express.Router();

        this.app.use('/user', UserRouter);
        this.app.use('/product', ProductsRouter);
        this.app.use((req:Request, res: Response, next: NextFunction)=> {
            var error = new Error('Not found');
            error['status'] = 404;
            next(error);
        });

        this.app.use((error: Error, req:Request, res: Response, next: NextFunction)=> {
            res.status(error['status'] || 500);
            res.json({error: error['status']});
            return null;            
        });
    }
}

export default new Server().app;