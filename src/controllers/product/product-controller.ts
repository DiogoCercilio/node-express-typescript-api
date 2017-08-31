import { ProductControllerInterface } from "./product-controller-interface";

class ProductController {
    public index(req, res) {
        res.json({
            message: "get product"
        });
    }
}

export default new ProductController();