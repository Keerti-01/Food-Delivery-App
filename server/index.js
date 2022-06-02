// impoerting env varibles
require("dotenv").config();  //becozz we will be directly running it so we use require

// libraries
import express from "express";
import cors from "cors"; //cross-origin-request for security purposes, we need this becoz of frontend. means that serrver will allow request other than our own serrver
import helmet from "helmet"; //security , it adds headerrs


//microservice routes
import Auth from "./API/Auth"


//databse connection
import ConnectDB from "./database/connection"
//const db = require('./database/connection')

const app = express();

//middlewares application
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(cors());

//application routes
app.use("/auth",Auth)

app.get("/", (req,res) => res.json({message : "Setup Success"}))

app.listen(4000, () => 
    ConnectDB()
    .then(() => console.log("Server is running and DB connection successful :))"))
    .catch(() => console.log("Server running but database failed :((")))

