import { Router } from "express";
import * as categoriesController from "../controllers/categories";
const router = Router();

router.get("/category", categoriesController.gets);
router.get("/category/:slug", categoriesController.read);
router.post("/category", categoriesController.create);
router.put("/category/:id", categoriesController.update);
router.delete("/category/:id", categoriesController.remove);
router.get("/category/:id", categoriesController.get);

export default router;
