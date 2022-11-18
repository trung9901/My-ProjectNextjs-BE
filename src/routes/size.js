import { Router } from "express";
const router = Router();
import * as sizeCtrl from "../controllers/size";

router.post("/size", sizeCtrl.create);
router.get("/size", sizeCtrl.gets);
router.get("/size/:id", sizeCtrl.get);
router.delete("/size/:id", sizeCtrl.remove);
router.put("/size/:id", sizeCtrl.update);

export default router;
