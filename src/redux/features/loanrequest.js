import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";


export const createLoanRequest = createAsyncThunk("loanreq/create", async({userId,formValue, navigate, toast}, {rejectWithValue}) => {
    try {
        const response = await api.createLoanRequest(formValue,userId);
        toast.success("loan reuqest  done.")
        navigate("/Home");
        return response.data;

    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

export const getLoanrequestByuser = createAsyncThunk("loanreq/getLoanrequestByuser", async (userId, { rejectWithValue }) => {
    try {
        const response = await api.getLoanrequestByuser(userId);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});
export const getAllLoanReq = createAsyncThunk("loanreq/getAllLoanReq", async(_, {rejectWithValue}) => {
    try {
        const response = await api.getAllLoanReq();
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});
export const updateLoanreq = createAsyncThunk("loanreq/updatereq", async(updateData, {rejectWithValue}) => {
    try{
        const response = await api.updaterequest(updateData)
        return response.data
    }catch (error) {
        return rejectWithValue(error.response.data);
    } 
})
const loanreqSlice = createSlice({
    name: "loanreq",
    initialState: {
        loanReq: {},
        loanReqs: [],
        userLoanReqs: [],
        error: "",
        loading: false,
    }, //the following are life cycles
    extraReducers: {
        [createLoanRequest.pending]: (state, action) => {
            state.loading = true;
        },
        [createLoanRequest.fulfilled]: (state, action) => {
            state.loading = false;
            state.loanReqs = [action.payload];
        },
        [createLoanRequest.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
        [getLoanrequestByuser.pending]: (state, action) => {
            state.loading = true;
        },
        [getLoanrequestByuser.fulfilled]: (state, action) => {
            state.loading = false;
            state.userLoanReqs = action.payload;
        },
        [getLoanrequestByuser.rejected]: (state, action) => {
            state.loading = false;
            state.userLoanReqs = action.payload.message;
        },
        [getAllLoanReq.pending]: (state, action) => {
            state.loading = true;
        },
        [getAllLoanReq.fulfilled]: (state, action) => {
            state.loading = false;
            state.loanReqs = action.payload;
        },
        [getAllLoanReq.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

    }
});

export default loanreqSlice.reducer;