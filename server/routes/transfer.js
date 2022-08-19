import express from "express";
const router = express.Router();
import {createTransfer,getTransferByuser,getTransfers} from "../controllers/Transfer.js";
import auth from "../middleware/auth.js";

router.post("/createTrans",auth, createTransfer);
router.get("/getTransferByuser/:id", auth ,getTransferByuser);
router.get("/getTransfers",getTransfers);

export default router;