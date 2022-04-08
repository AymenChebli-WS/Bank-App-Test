import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import userRouter from "./routes/user.js";
import compteRouter from "./routes/compte.js";


// mongodb+srv://admin:<password>@cluster0.m2uog.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

const app = express();
app.use(morgan("dev"));
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/users", userRouter); //path
app.use("/compte", compteRouter);

const MONGODB_URL = "mongodb+srv://admin:admin123@cluster0.m2uog.mongodb.net/amen_db?retryWrites=true&w=majority"

const port = 5000;

mongoose.connect(MONGODB_URL).then(() => {
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    })
}).catch((error) => console.log(`${error} . did not connect`))