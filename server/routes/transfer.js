import express from "express";
const router = express.Router();
import {createTransfer} from "../controllers/Transfer.js";

router.post("/createTrans", createTransfer);

export default router;