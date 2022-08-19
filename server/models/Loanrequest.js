import mongoose from "mongoose";

const loanSchema = mongoose.Schema({
    requester : String,
    ammount: Number, 
    loanTerm: Number,
    interest: { type :String, default :"5%"} ,
    nature: String,
    brutIncome : Number,
    payBack : String,
    status : {type:String, default : "on hold"}
});

const LoanRequestModel = mongoose.model("loanrequest", loanSchema);

export default LoanRequestModel;