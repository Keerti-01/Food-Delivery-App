import express from "express";
import cors from "cors"; //cross-origin-request for security purposes, we need this becoz of frontend. means that serrver will allow request other than our own serrver
import helmet from "helmet"; //security , it adds headerrs

const app = express();

//middlewares application
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(cors());

app.get("/", (req,res) => res.json({message : "Setup Success"}))

app.listen(4000, ()=> console.log("Server is running"))
