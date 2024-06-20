import { Router } from "express";
import * as controller from "../controllers/products.controllers.js"

const productsRouter = Router();

productsRouter.get('/', controller.getAll);
productsRouter.get('/:id', controller.getById);
productsRouter.post('/', controller.create);
productsRouter.put('/:id', controller.update);
productsRouter.delete('/:id', controller.remove);

export default productsRouter;