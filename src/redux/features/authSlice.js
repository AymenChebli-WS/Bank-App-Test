import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

export const login = createAsyncThunk("auth/login", async({formValue, navigate, toast}, {rejectWithValue}) => {
    try {
        const response = await api.signIn(formValue);
        toast.success("Logged in sucessfully.")
        navigate("/Home");
        return response.data;

    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

export const register = createAsyncThunk("auth/register", async({formValue, navigate, toast}, {rejectWithValue}) => {
    try {
        const response = await api.signUp(formValue);
        toast.success("Signed up sucessfully.")
        navigate("/login");
        return response.data;

    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});
export const getUser = createAsyncThunk("users/getUser", async(id, {rejectWithValue}) => {
    try {
        const response = await api.getUser(id);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});
export const getUsers = createAsyncThunk("users/getUsers", async(_, {rejectWithValue}) => {
    try {
        const response = await api.getUsers();
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        error: "",
        loading: false,
        singleUser: null,
        users: [],
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setLogout: (state, action) => {
            localStorage.clear();
            state.user = null;
        }
    },
    extraReducers: {
        [login.pending]: (state, action) => {
            state.loading = true;
        },
        [login.fulfilled]: (state, action) => {
            state.loading = false;
            localStorage.setItem("profile", JSON.stringify({...action.payload}));
            state.user = action.payload
        },
        [login.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
        [register.pending]: (state, action) => {
            state.loading = true;
        },
        [register.fulfilled]: (state, action) => {
            state.loading = false;
            localStorage.setItem("profile", JSON.stringify({...action.payload}));
            state.user = action.payload
        },
        [register.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
        [getUser.pending]: (state, action) => {
            state.loading = true;
        },
        [getUser.fulfilled]: (state, action) => {
            state.loading = false;
            state.singleUser = action.payload;
        },
        [getUser.rejected]: (state, action) => {
            state.loading = false;
            state.singleUser = action.payload.message;
        },
        [getUsers.pending]: (state, action) => {
            state.loading = true;
        },
        [getUsers.fulfilled]: (state, action) => {
            state.loading = false;
            state.users = action.payload;
        },
        [getUsers.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
    }
});

export const { setUser, setLogout } = authSlice.actions;

export default authSlice.reducer;