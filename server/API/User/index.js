//importing libraries
import express from "express"
import passport from "passport"

//database model
import { userModel } from "../../database/allModels"

//valiadtion
import { ValidateUserID } from "../../Validation/user"

const Router = express.Router()

/**get user data
 * Route            /
 * Desc             get user data
 * Params           id
 * method           GET
 * access           public
 */
Router.get("/", async(req, res) => {
    try { 
    
        const user = await UserModel.findById(req.params._id);
        const {email,fullname, phoneNumber,address} = req.session.passport.user._doc;
        return res.json({ user: {email,fullname, phoneNumber,address} })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})

/**get user data
 * Route            /user/:id
 * Desc             get user data
 * Params           id
 * method           GET
 * access           public
 */
 Router.get("/:_id", async(req, res) => {
    try { 
    
        const user = await UserModel.findById(req.params._id);
        const { fullname } = user
        return res.json({ user: {  fullname } })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})

/**update user data
 * Route            /user/update/:userID
 * Desc             update user data
 * Params           id
 * method           PUT
 * access           public
 */
 Router.put("/update/:userID", async(req, res) => {
    try {
        //validation
        await ValidateUserID(req.params)
        const { userID } = req.params
        const { userData } = req.body

        const updateUser = await userModel.findByIdAndUpdate( userID, {
            $set: userData // set will update only that property tht userr will change
        },{
            new: true
        })
        return res.json({ user: updateUser })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})

export default Router;