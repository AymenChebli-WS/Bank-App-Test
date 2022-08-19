import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";


export const creatTransfer = createAsyncThunk("transfer/create", async ({ formValue, userId, navigate, toast }, { rejectWithValue }) => {
    try {
        const response = await api.createTransfer(formValue, userId);
        toast.success("Transfer done.")
        navigate("/Home");
        return response.data;

    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

export const getTransferByuser = createAsyncThunk("transfer/getTransfesrbyId", async (userId, { rejectWithValue }) => {
    try {
        const response = await api.getTransferByuser(userId);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});
export const getTransfers = createAsyncThunk("transfer/getTransfers", async(_, {rejectWithValue}) => {
    try {
        const response = await api.getTransfers();
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

const transferSlice = createSlice({
    name: "transfer",
    initialState: {
        transfer: {},
        transfers: [],
        userTransfers: [],
        error: "",
        loading: false,
    }, //the following are life cycles
    extraReducers: {
        [creatTransfer.pending]: (state, action) => {
            state.loading = true;
        },
        [creatTransfer.fulfilled]: (state, action) => {
            state.loading = false;
            state.transfers = [action.payload];
        },
        [creatTransfer.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
        [getTransferByuser.pending]: (state, action) => {
            state.loading = true;
        },
        [getTransferByuser.fulfilled]: (state, action) => {
            state.loading = false;
            state.userTransfers = action.payload;
        },
        [getTransferByuser.rejected]: (state, action) => {
            state.loading = false;
            state.userTransfers = action.payload.message;
        },
        [getTransfers.pending]: (state, action) => {
            state.loading = true;
        },
        [getTransfers.fulfilled]: (state, action) => {
            state.loading = false;
            state.transfers = action.payload;
        },
        [getTransfers.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

    }
});

export default transferSlice.reducer;
