import mongoose from "mongoose";

const loanSchema = mongoose.Schema({
    User: String, //not number cuz it removes the 0
    ammount: Number,
    ammountPayed: {type: Number, default:0}, //not date cuz of the format
    interest : {type: Number, default:0.05},
    payBack : String

});

const LoanModal = mongoose.model("Loan", loanSchema);

export default LoanModal;