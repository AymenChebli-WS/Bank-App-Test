import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./features/authSlice";
import CompteReducer from "./features/compteSlice";
import LoanReqReducer from "./features/loanrequest"
import LoanReducer from "./features/loanSlice";
import TransferReducer from "./features/transfer";


export default configureStore({
    reducer: {
        auth: AuthReducer,
        compte: CompteReducer,
        loanreq: LoanReqReducer,
        loan: LoanReducer,
        transfer: TransferReducer,
       
    },
});