import { Router, Request, Response, NextFunction } from 'express';
import ProductController from '../controllers/product/product-controller';
import {ProductControllerInterface} from '../controllers/product/product-controller-interface';

class ProductRouter {
    router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    // Rotas para "/product"
    routes() {
        this.router.get('/', ProductController.index);
    }
}

export default new ProductRouter().router;