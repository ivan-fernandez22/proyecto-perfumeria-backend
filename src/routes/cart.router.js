import { Router } from "express";
import * as controller from "../controllers/cart.controllers.js";

const cartRouter = Router();

cartRouter.get("/", controller.getAll);

cartRouter.get("/:id", controller.getById);

cartRouter.post("/", controller.create);

cartRouter.put("/:id", controller.update);

cartRouter.delete("/:id", controller.remove);

cartRouter.post("/:idCart/products/:idProd", controller.addProdToCart);

cartRouter.delete("/:idCart/products/:idProd", controller.removeProdToCart);

cartRouter.put("/:idCart/products/:idProd", controller.updateProdQuantityToCart);

cartRouter.delete("/clear/:idCart", controller.clearCart);

export default cartRouter;