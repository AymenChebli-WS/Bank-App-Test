import express from "express";
const router = express.Router();
import {createLoanRequest,getLoanrequestByuser,getallrequest,updateStatus} from "../controllers/Loanrequest.js"
import auth from "../middleware/auth.js";

router.post("/createrequest",auth, createLoanRequest);
router.get("/getLoanrequestByuser/:id", auth ,getLoanrequestByuser);
router.get("/getallrequest",getallrequest);
router.put("/updaterequest",updateStatus);

export default router;