import express from "express";
const router = express.Router();
import auth from "../middleware/auth.js";

import {createCompte, getComptes, getCompte, deleteCompte, updateCompte,findCompteByNumber,getComptesByUser,compteToCompte,testusercompt} from "../controllers/compte.js";

router.post("/createCompte", auth,createCompte); //add auth to restrict
router.get("/getComptes", getComptes);
router.get("/getCompte/:id", getCompte);
router.delete("/:id", deleteCompte);
router.patch("/:id", auth,updateCompte);
router.get("/compteBynum/:numCompte",findCompteByNumber);
router.get("/userComptes/:id", auth, getComptesByUser);
router.put("/compteToCompte",compteToCompte);
router.get("/testuser/:id/:numcompte/:amount/:transDate",auth,testusercompt)



export default router;