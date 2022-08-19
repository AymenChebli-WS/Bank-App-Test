import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";


export const createLoan = createAsyncThunk("loan/createloan", async({loanData,toast}, {rejectWithValue}) => {
    try {
        const response = await api.createLoan(loanData);
        toast.success("Loan created.")
      
        return response.data;

    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});
export const getAllLoan = createAsyncThunk("loan/getAllLoan", async(_, {rejectWithValue}) => {
    try {
        const response = await api.getAllLoans();
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});




const loanSlice = createSlice({
    name: "loan",
    initialState: {
        loan: {},
        loans: [],
        userLoans: [],
        error: "",
        loading: false,
    }, //the following are life cycles
    extraReducers: {
        [getAllLoan.pending]: (state, action) => {
            state.loading = true;
        },
        [getAllLoan.fulfilled]: (state, action) => {
            state.loading = false;
            state.loans = action.payload;
        },
        [getAllLoan.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },


    }
});

export default loanSlice.reducer;