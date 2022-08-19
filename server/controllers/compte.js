import mongoose from "mongoose";
import CompteModal from "../models/compte.js";

export const createCompte = async (req, res) => {
    const compte = req.body
    const newCompte = new CompteModal({
        ...compte,
        owner: req.userId,
        // dateSolde: compte.dateSolde.split("-").reverse().join("-") //properly format the date
    });

    try {
        await newCompte.save();
        res.status(201).json(newCompte);
    } catch (error) {
        res.status(404).json({ message: "Something went wrong." });
    }
};

export const getComptes = async (req, res) => {
    try {
        const comptes = await CompteModal.find();
        res.status(200).json(comptes);
    } catch (error) {
        res.status(404).json({ message: "Something went wrong." });
    }
}

export const getCompte = async (req, res) => {
    const { id } = req.params;
    try {
        const compte = await CompteModal.findById(id);
        res.status(200).json(compte);
    } catch (error) {
        res.status(404).json({ message: "Something went wrong." });
    }
}

export const deleteCompte = async (req, res) => {
    const { id } = req.params;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ message: "Compte doesn't exist" });
        }
        await CompteModal.findByIdAndRemove(id);
        res.json({ message: "Compte deleted successfully." });
    } catch (error) {
        res.status(404).json({ message: "Something went wrong." });
    }
}

export const updateCompte = async (req, res) => {
    const { id } = req.params;
    const { numCompte, libelle, dateSolde, devise, soldeActuel } = req.body;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ message: "Compte doesn't exist" });
        }
        const updatedCompte = {
            numCompte,
            libelle,
            dateSolde,
            devise,
            soldeActuel,
            _id: id
        }
        await CompteModal.findByIdAndUpdate(id, updatedCompte, { new: true });
        res.json(updatedCompte);
    } catch (error) {
        res.status(404).json({ message: "Something went wrong." });
    }
}

export const findCompteByNumber = async (req, res) => {
    const { numCompte } = req.params
    try {
        const comptenumber = await CompteModal.findOne({ numCompte });
        if (!comptenumber) return res.status(200).json({ result: false });

        res.status(200).json({ result: true, compte: comptenumber });

    }
    catch (error) {
        res.status(500).json({ message: "Something went wrong" });
        console.log(error);
    }
}

export const getComptesByUser = async (req, res) => {
    const { id } = req.params;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ message: "User doesn't exist." })
        }
        const userComptes = await CompteModal.find({ owner: id });
        res.status(200).json(userComptes);
    }
    catch (error) {
        res.status(500).json({ message: "Something went wrong" });
        console.log(error);
    }
}

export const compteToCompte = async (req, res) => {
    const { numsender, numreciver, amount } = req.body
    console.log(amount)

    try {
        const compsender = await CompteModal.findOne({ numCompte: numsender })
        const compreciver = await CompteModal.findOne({ numCompte: numreciver })
        if (compsender.soldeActuel < amount) {
            return res.status(404).json({ message: "Need more gold" })
        }
        const newsendersolde = compsender?.soldeActuel - parseInt(amount);
        const newreciversolde = compreciver?.soldeActuel + parseInt(amount);


        await CompteModal.findByIdAndUpdate(compsender._id, { soldeActuel: newsendersolde })
        await CompteModal.findByIdAndUpdate(compreciver._id, { soldeActuel: newreciversolde })

        res.status(200).json("Transaction done");
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
        console.log(error);
    }
}

export const testusercompt = async (req, res) => {
    const { id, numcompte, amount, transDate } = req.params;
    const timeElapsed = Date.now();

    const today = new Date(timeElapsed);
    const inputedDate = new Date(transDate)
    


    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(200).json({ result: false, message: "User doesn't exist." })
        }
        const userCompte = await CompteModal.findOne({ numCompte: numcompte });
        if (userCompte.soldeActuel < parseInt(amount)) {
            return res.status(200).json({ result: false, message: "Montant insufficient" });
        }
        if (today.getDate() > inputedDate.getDate() || today.getMonth() > inputedDate.getMonth() || today.getFullYear() > inputedDate.getFullYear()) {
            return res.status(200).json({ result: false, message: "vérifier la date" });   
        }
        return res.status(200).json({ result: true });


    }
    catch (error) {
        res.status(500).json({ message: "Something went wrong" });
        console.log(error);
    }
}