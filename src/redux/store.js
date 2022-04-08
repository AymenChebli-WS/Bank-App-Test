import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./features/authSlice";
import CompteReducer from "./features/compteSlice";

export default configureStore({
    reducer: {
        auth: AuthReducer,
        compte: CompteReducer,
    },
});