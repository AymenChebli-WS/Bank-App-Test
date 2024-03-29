import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

export const createCompte = createAsyncThunk("compte/createCompte", async({compteData, navigate, toast}, {rejectWithValue}) => {
    try {
        const response = await api.createCompte(compteData);
        toast.success("Compte created sucessfully.")
        navigate("/");
        return response.data;

    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

export const getComptes = createAsyncThunk("compte/getComptes", async(_, {rejectWithValue}) => {
    try {
        const response = await api.getComptes();
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

export const getCompte = createAsyncThunk("compte/getCompte", async(id, {rejectWithValue}) => {
    try {
        const response = await api.getCompte(id);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

export const deleteCompte = createAsyncThunk("compte/deleteCompte", async({id, toast}, {rejectWithValue}) => {
    try {
        const response = await api.deleteCompte(id);
        toast.success("Compte deleted successfully");
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

export const updateCompte = createAsyncThunk("compte/updateCompte", async({id, compteData, toast, navigate}, {rejectWithValue}) => {
    try {
        const response = await api.updateCompte(compteData, id);
        toast.success("Compte updated successfully");
        navigate("/");
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

export const findCompte = createAsyncThunk("compte/compteBynum", async(num, {rejectWithValue}) => {
    
    try {
        const response = await api.findCompte(num);
        return response.data;
    }
    catch(error){
        return rejectWithValue(error.response.data);
    }
})
export const getComptesByUser = createAsyncThunk("compte/userComptes", async(userId, {rejectWithValue}) => {
    try {
        const response = await api.getComptesByUser(userId);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

export const compteToCompte = createAsyncThunk("/compte/compteToCompte", async(transdata, {rejectWithValue}) => {
    try {
        
        const response = await api.compteToCompte(transdata)
        
        return response.data;
    }catch (error) {
        return rejectWithValue(error.response.data);
    }

})

export const testusercompt = createAsyncThunk("compte/testusercompt", async({userId,sender,ammount,transDate},{rejectWithValue}) => {
    try {
        const response = await api.testusercompt(userId,sender,ammount,transDate);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});


const compteSlice = createSlice({
    name: "compte",
    initialState: {
        compte: {},
        comptes: [],
        userComptes: [],
        error: "",
        loading: false,
    }, //the following are life cycles
    extraReducers: {
        [createCompte.pending]: (state, action) => {
            state.loading = true;
        },
        [createCompte.fulfilled]: (state, action) => {
            state.loading = false;
            state.comptes = [action.payload];
        },
        [createCompte.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
        [getComptes.pending]: (state, action) => {
            state.loading = true;
        },
        [getComptes.fulfilled]: (state, action) => {
            state.loading = false;
            state.comptes = action.payload;
        },
        [getComptes.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
        [getCompte.pending]: (state, action) => {
            state.loading = true;
        },
        [getCompte.fulfilled]: (state, action) => {
            state.loading = false;
            state.compte = action.payload;
        },
        [getCompte.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
        [deleteCompte.pending]: (state, action) => {
            state.loading = true;
        },
        [deleteCompte.fulfilled]: (state, action) => {
            state.loading = false;
            console.log("action", action);
            const {arg: {id}} = action.meta;
            if (id) {
                state.comptes = state.comptes.filter((item) => item._id !== id);
            }
        },
        [deleteCompte.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
        [updateCompte.pending]: (state, action) => {
            state.loading = true;
        },
        [updateCompte.fulfilled]: (state, action) => {
            state.loading = false;
            console.log("action", action);
            const {arg: {id}} = action.meta;
            if (id) {
                state.comptes = state.comptes.map((item) => item._id === id ? action.payload : item);
            }
        },
        [updateCompte.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
        [getComptesByUser.pending]: (state, action) => {
            state.loading = true;
        },
        [getComptesByUser.fulfilled]: (state, action) => {
            state.loading = false;
            state.userComptes = action.payload;
        },
        [getComptesByUser.rejected]: (state, action) => {
            state.loading = false;
            state.userComptes = action.payload.message;
        },
        [findCompte.pending]: (state, action) => {
            state.loading = true;
        },
        [findCompte.fulfilled]: (state, action) => {
            state.loading = false;
            state.compte = action.payload;
        },
        [findCompte.rejected]: (state, action) => {
            state.loading = false;
            state.compte = action.payload.message;
        },
    },
    
    
    
});

export default compteSlice.reducer;