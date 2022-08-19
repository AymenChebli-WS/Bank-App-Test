import mongoose from "mongoose";
import LoanRequestModel from "../models/loan.js";

export const createLoan = async (req, res) => {
    const loan = req.body
    const newloan = new LoanRequestModel(loan);

    try {
        await newloan.save();
        res.status(201).json(newloan);
    } catch (error) {
        res.status(404).json({ message: "Something went wrong." });
    }
};
export const getAllLoan = async (req, res) => {
    try {
        const allLoan = await LoanRequestModel.find();
        res.status(200).json(allLoan);
    } catch (error) {
        res.status(404).json({message: "Something went wrong."});
    }
}