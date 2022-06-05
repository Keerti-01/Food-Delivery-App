// library
import express from "express"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import passport from "passport";

// models
import { userModel } from "../../database/user";

//validation
import { ValidateSignUp } from "../../Validation/auth"
import { ValidateSignIn } from "../../Validation/auth"

const Router = express.Router();

// signup    
/**
 * Route            /auth/signup
 * Desc             signup with email and password
 * Params           none
 * method           post
 * access           public
 */
Router.post("/signup", async(req, res) => {
    
    try{ 
        //validation
        await ValidateSignUp(req.body.credentials)
        //api logic
        await userModel.findByEmailAndPhone(req.body.credentials)
        const newUser = await userModel.create(req.body.credentials) // save to databse
        const token = newUser.generateJwtToken() //generate JWT token
         //return
         return res.status(200).json({ token, status:"success" })

        }catch(error){
            return res.status(500).json({ error: error.message });
        }
    })
    
    
// signin   
/**
 * Route            /auth/signin
 * Desc             signin with email and password
 * Params           none
 * method           post
 * access           public
 */
 Router.post("/signin", async(req, res) => {
    try{ 
        //validation
        await ValidateSignIn(req.body.credentials)
               
        const user = await userModel.findByEmailAndPassword(req.body.credentials)

        const token = user.generateJwtToken() //generate JWT token
         //return
         return res.status(200).json({ token, status:"success" })

        }catch(error){
            return res.status(500).json({ error: error.message });
        }
    })

// google authentication    
/**
 * Route            /auth/google
 * Desc             google signin
 * Params           none
 * method           get
 * access           public
 */
 Router.get("/google", passport.authenticate("google",
  { scope:
    [
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email"
    ]
  }
))

// google callback : what should happen afterr authenticating    
/**
 * Route            /google/callback
 * Desc             google signin callback
 * Params           none
 * method           get
 * access           public
 */
 Router.get(
    "/google/callback",
    passport.authenticate("google",{ failureRedirect: "/" } ),
    (req, res) => {
        return res.json({ token: req.session.passport.user.token })
    }
    
    )

export default Router;






// signup
        // //hash the password
        // const bcryptSalt = await bcrypt.genSalt(8); // salt= no of iterations, more the salt more secure password

        // const hashedPassword = await bcrypt.hash(password, bcryptSalt);

        
        
        // await userModel.create({
        //     ...req.body.credentials,
        //     password: hashedPassword
        // })

       
        //const  token = jwt.sign({ user: { fullname, email } }, "zomatoApp" )

       

