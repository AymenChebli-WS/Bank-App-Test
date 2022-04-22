import mongoose from "mongoose";

const TransferSchema = mongoose.Schema({ //not number cuz it removes the 0
    sender: String,
    reciver: String, //not date cuz of the format
    ammount: Number,
    transDate: String,
    comment: String,
    Devise:String,
});

const TransferModal = mongoose.model("Transfer", TransferSchema);

export default TransferModal;