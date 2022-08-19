import mongoose from "mongoose";
import LoanRequestModel from "../models/Loanrequest.js";

export const createLoanRequest = async (req, res) =>  {
    const request = req.body
    const newRequest = new LoanRequestModel({...request, requester : req.userId});

    try {
        await newRequest.save();
        res.status(201).json(newRequest);
    } catch (error) {
        res.status(404).json({message: "Something went wrong."});
    }
};

export const getLoanrequestByuser = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: "User doesn't exist." })
    }
    const loanlist = await LoanRequestModel.find({requester : id});
    res.status(200).json(loanlist);
}

export const getallrequest = async (req, res) => {
    try {
        const allreq = await LoanRequestModel.find({status :"on hold"});
        res.status(200).json(allreq);
    } catch (error) {
        res.status(404).json({message: "Something went wrong."});
    }
}
export const updateStatus = async (req, res) => {
    const {id,newStatus} = req.body;

    try {
        const loanreuqest =  await   LoanRequestModel.findByIdAndUpdate(id,{status : newStatus})
        res.status(200).json(loanreuqest);
    }catch (error) {
        res.status(404).json({message: "Something went wrong."});
    }
}