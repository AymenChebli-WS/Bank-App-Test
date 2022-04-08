import express from "express";
const router = express.Router();
import auth from "../middleware/auth.js";

import {createCompte, getComptes, getCompte, deleteCompte, updateCompte} from "../controllers/compte.js";

router.post("/createCompte", createCompte); //add auth to restrict
router.get("/getComptes", getComptes);
router.get("/getCompte/:id", getCompte);
router.delete("/:id", deleteCompte);
router.patch("/:id", updateCompte);

export default router;