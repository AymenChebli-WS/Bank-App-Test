import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";


export const creatTransfer = createAsyncThunk("auth/login", async({formValue, navigate, toast}, {rejectWithValue}) => {
    try {
        const response = await api.createTransfer(formValue);
        toast.success("Transfer done.")
        navigate("/Home");
        return response.data;

    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});