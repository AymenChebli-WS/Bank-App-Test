import express from "express";
const router = express.Router();

import {signup, signin,getUser,getUsers} from "../controllers/user.js";

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/getUser/:id", getUser);
router.get("/getUsers", getUsers);
export default router;