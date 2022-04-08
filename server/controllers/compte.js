import mongoose from "mongoose";
import CompteModal from "../models/compte.js";

export const createCompte = async (req, res) =>  {
    const compte = req.body
    const newCompte = new CompteModal({
        ...compte,
        dateSolde: compte.dateSolde.split("-").reverse().join("-") //properly format the date
    });

    try {
        await newCompte.save();
        res.status(201).json(newCompte);
    } catch (error) {
        res.status(404).json({message: "Something went wrong."});
    }
};

export const getComptes = async (req, res) => {
    try {
        const comptes = await CompteModal.find();
        res.status(200).json(comptes);
    } catch (error) {
        res.status(404).json({message: "Something went wrong."});
    }
}

export const getCompte = async (req, res) => {
    const {id} = req.params;
    try {
        const compte = await CompteModal.findById(id);
        res.status(200).json(compte);
    } catch (error) {
        res.status(404).json({message: "Something went wrong."});
    }
}

export const deleteCompte = async (req, res) => {
    const {id} = req.params;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({message: "Compte doesn't exist"});
        }
        await CompteModal.findByIdAndRemove(id);
        res.json({message: "Compte deleted successfully."});
    } catch (error) {
        res.status(404).json({message: "Something went wrong."});
    }
}

export const updateCompte = async (req, res) => {
    const {id} = req.params;
    const {numCompte, libelle, dateSolde, devise, soldeActuel} = req.body;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({message: "Compte doesn't exist"});
        }
        const updatedCompte = {
            numCompte,
            libelle,
            dateSolde,
            devise,
            soldeActuel,
            _id: id
        }
        await CompteModal.findByIdAndUpdate(id, updatedCompte, {new: true});
        res.json(updatedCompte);
    } catch (error) {
        res.status(404).json({message: "Something went wrong."});
    }
}