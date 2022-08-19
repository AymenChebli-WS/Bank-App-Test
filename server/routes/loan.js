import express from "express";
const router = express.Router();

import {createLoan,getAllLoan} from '../controllers/Loan.js'

router.post("/createLoan",createLoan);
router.get("/getAllLoan",getAllLoan)


export default router;