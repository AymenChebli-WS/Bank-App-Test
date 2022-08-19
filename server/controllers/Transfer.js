import mongoose from "mongoose";
import TransferModal from "../models/Transfer.js";


export const createTransfer = async (req, res) => {
    const tran = req.body

    const newtrans = new TransferModal({
        ...tran,
        senderUser: req.userId,
        transDate: tran.transDate.split("-").reverse().join("-"),//properly format the date
    });

    try {
        await newtrans.save();
        res.status(201).json(newtrans);
    } catch (error) {
        res.status(404).json({ message: "Something went wrong." });
    }
};

export const getTransferByuser = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: "User doesn't exist." })
    }
    const transferlist = await TransferModal.find({
        $or: [
            { 'senderUser': id },
            { 'reciverUser': id }
        ]
    });
    res.status(200).json(transferlist);
}
export const getTransfers = async (req, res) => {
    try {
        const transfers = await TransferModal.find();
        res.status(200).json(transfers);
    } catch (error) {
        res.status(404).json({message: "Something went wrong."});
    }
}

