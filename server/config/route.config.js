
import JwtPassport from "passport-jwt"

// database model
import { userModel } from "../database/allModels"

const JWTStrategy = JwtPassport.Strategy
const ExtractJwt = JwtPassport.ExtractJwt

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: "zomatoApp"
}

export default (passport) => {
    passport.use(
        new JWTStrategy(options, async(jwt__payload, done) => {
        try {
            const doesUserExist = userModel.findById(jwt__payload.user)
            if(!doesUserExist) return done(null, false)  //if user does not exist
            return done(null, doesUserExist)
        } catch (error) {
            throw new Error(error)
        }
    }))
}