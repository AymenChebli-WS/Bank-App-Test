import axios from "axios";

const API = axios.create({baseURL: "http://localhost:5000"});

API.interceptors.request.use((req) => {
    if (localStorage.getItem("profile")) {
      req.headers.Authorization = `Bearer ${
        JSON.parse(localStorage.getItem("profile")).token
      }`;
    }
    return req;
}); //used to parse token, for now used to pass user Id

export const signIn = (formData) => API.post("/users/signin", formData);
export const signUp = (formData) => API.post("/users/signup", formData);
export const getUser = (id) => API.get(`/users/getUser/${id}`);
export const getUsers = () => API.get("/users/getUsers");

export const createCompte = (compteData) => API.post("/compte/createCompte", compteData);
export const getComptes = () => API.get("/compte/getComptes");
export const getCompte = (id) => API.get(`/compte/getCompte/${id}`);
export const deleteCompte = (id) => API.delete(`/compte/${id}`);
export const updateCompte = (compteData, id) => API.patch(`/compte/${id}`, compteData);
export const findCompte = (num) => API.get(`/compte/compteBynum/${num}`);
export const getComptesByUser = (userId) => API.get(`/compte/userComptes/${userId}`);
export const compteToCompte = (transdata) => API.put('/compte/compteToCompte',transdata);
export const testusercompt = (userId,sender,ammount,transDate) => API.get(`/compte/testuser/${userId}/${sender}/${ammount}/${transDate}`);


export const createTransfer = (formData,userId) => API.post("/transfer/createTrans", formData,userId);
export const getTransferByuser = (id) => API.get(`/transfer/getTransferByuser/${id}`);
export const getTransfers = () => API.get("transfer/getTransfers");


export const createLoanRequest = (formData,userId) => API.post("/loanreq/createrequest", formData,userId);
export const getLoanrequestByuser = (id) => API.get(`/loanreq/getLoanrequestByuser/${id}`);
export const getAllLoanReq = () => API.get("/loanreq/getallrequest");
export const updaterequest = (updateData) => API.put("/loanreq/updaterequest",updateData);

export const createLoan = (loanData) => API.post("/loan/createLoan",loanData)
export const getAllLoans = () => API.get("loan/getAllLoan",)