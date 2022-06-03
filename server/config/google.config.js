require("dotenv").config(); 
import googleOAuth from "passport-google-oauth20"

import { userModel } from "../database/user"

const GoogleStrategy = googleOAuth.Strategy

export default (passport) => {   //passport is auuthenticating library
    passport.use(
        new GoogleStrategy({
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: "http://localhost:4000/auth/google/callback"
        },  
         async (accessToken, refreshToken, profile, done) => { //after authenticating we get these 4 values from google
            // creating new user object
            const newUser = {
                fullname: profile.displayName,
                email: profile.emails[0].value, //one perrson can have many emails
                profilePic: profile.photos[0].value
            }
            try {
                //user exist or not
                const user = await userModel.findOne({ email: newUser.email })
               
                //if user exist then call done method
                if(user){
                     //create token
                    const token = user.generateJwtToken()
                    done(null, { user, token })
                }
                //if user do not exist
                else{
                    //create new user
                    const user = await userModel.create(newUser)
                     //create token
                    const token = user.generateJwtToken()
                    //return user
                    done(null, { user, token })
                }

            } catch (error) {
                done(error, null)
            }
         }
        )
    )

    passport.serializeUser((userData, done) => done(null, {...userData}))
    passport.deserializeUser((id, done) => done(null, id))
}