import { Router } from "express";
const router = Router();
import * as colorCtrl from "../controllers/color";

router.post("/colors", colorCtrl.create);
router.get("/colors", colorCtrl.gets);
router.get("/colors/:id", colorCtrl.get);
router.delete("/colors/:id", colorCtrl.remove);
router.put("/colors/:id", colorCtrl.update);

export default router;
