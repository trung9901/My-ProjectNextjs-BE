import { Router } from "express";
const router = Router();
import * as productCtrl from "../controllers/products";

router.post("/products", productCtrl.create);
router.get("/products", productCtrl.gets);
router.get("/products/:id", productCtrl.get);
router.delete("/products/:id", productCtrl.remove);
router.put("/products/:id", productCtrl.update);
router.get("/product/:slug", productCtrl.read);

export default router;
