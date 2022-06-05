// impoerting env varibles
require("dotenv").config();  //becozz we will be directly running it so we use require

// libraries
import express from "express";
import cors from "cors"; //cross-origin-request for security purposes, we need this becoz of frontend. means that serrver will allow request other than our own serrver
import helmet from "helmet"; //security , it adds headerrs
import passport from "passport";

//import configs
import googleAuthConfig from "./config/google.config";
import routeConfig from "./config/route.config"

//microservice routes
import Auth from "./API/Auth"
import Restuarant from "./API/Restuarant"
import Food from "./API/Food"
import Menu from "./API/Menu"
import Image from "./API/Image"
import Order from "./API/Order"
import Review from "./API/Reviews"
import User from "./API/User"

//databse connection
import ConnectDB from "./database/connection"
//const db = require('./database/connection')

const session = require('express-session');

const app = express();

// After you declare "app"
app.use(session({ secret: 'project-final' }));

//middlewares application
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(cors());
app.use(passport.initialize())
app.use(passport.session())

//passport configuration 
googleAuthConfig(passport)
routeConfig(passport)

//application routes
app.use("/auth", Auth)
app.use("/restuarant", Restuarant)
app.use("/food", Food)
app.use("/menu", Menu)
app.use("/image", Image)
app.use("/order", Order)
app.use("/review", Review)
app.use("/user", User)

app.get("/", (req,res) => res.json({message : "Setup Success"}))

app.listen(4000, () => 
    ConnectDB()
    .then(() => console.log("Server is running and DB connection successful :))"))
    .catch(() => console.log("Server running but database failed :((")))

