// library
import express from "express"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

// models
import { userModel } from "../../database/user";


const Router = express.Router();

// signup    
/**
 * Route            /signup
 * Desc             signup with email and password
 * Params           none
 * method           post
 * access           public
 */
Router.post("/signup", async(req, res) => {
    try{        
        await userModel.findByEmailAndPhone(req.body.credentials)
        const newUser = await userModel.create(req.body.credentials) // save to databse
        const token = newUser.generateJwtToken() //generate JWT token
         //return
         return res.status(200).json({ token, status:"success" })

        }catch(error){
            return res.status(500).json({ error: error.message });
        }
    })
    export default Router;
    
// signin   
/**
 * Route            /signin
 * Desc             signin with email and password
 * Params           none
 * method           post
 * access           public
 */
 Router.post("/signin", async(req, res) => {
    try{        
        const user = await userModel.findByEmailAndPassword(req.body.credentials)

        const token = user.generateJwtToken() //generate JWT token
         //return
         return res.status(200).json({ token, status:"success" })

        }catch(error){
            return res.status(500).json({ error: error.message });
        }
    })






// signup
        // //hash the password
        // const bcryptSalt = await bcrypt.genSalt(8); // salt= no of iterations, more the salt more secure password

        // const hashedPassword = await bcrypt.hash(password, bcryptSalt);

        
        
        // await userModel.create({
        //     ...req.body.credentials,
        //     password: hashedPassword
        // })

       
        //const  token = jwt.sign({ user: { fullname, email } }, "zomatoApp" )

       

