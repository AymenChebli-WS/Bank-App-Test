import mongoose from "mongoose";
import TransferModal from "../models/Transfer.js";


export const createTransfer = async (req, res) =>  {
    const tran = req.body
    const newtrans = new TransferModal({
        ...tran,
        transDate: tran.transDate.split("-").reverse().join("-") //properly format the date
    });

    try {
        await newtrans.save();
        res.status(201).json(newtrans);
    } catch (error) {
        res.status(404).json({message: "Something went wrong."});
    }
};