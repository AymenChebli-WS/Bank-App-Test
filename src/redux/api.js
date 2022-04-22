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

export const createCompte = (compteData) => API.post("/compte/createCompte", compteData);
export const getComptes = () => API.get("/compte/getComptes");
export const getCompte = (id) => API.get(`/compte/getCompte/${id}`);
export const deleteCompte = (id) => API.delete(`/compte/${id}`);
export const updateCompte = (compteData, id) => API.patch(`/compte/${id}`, compteData);


export const createTransfer = (formData) => API.post("/transfer/createTrans", formData);