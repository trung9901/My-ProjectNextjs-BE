import { Router } from "express";
const router = Router();
import * as colorCtrl from "../controllers/color";

router.post("/color", colorCtrl.create);
router.get("/color", colorCtrl.gets);
router.get("/color/:id", colorCtrl.get);
router.delete("/color/:id", colorCtrl.remove);
router.put("/color/:id", colorCtrl.update);

export default router;
