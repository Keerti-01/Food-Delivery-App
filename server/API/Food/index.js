//importing libraries
import express from "express"
import passport from "passport"

//database model
import { foodModel } from "../../database/allModels"
const Router = express.Router()

//validation
import { ValidateRestuarantID, ValidateCategory } from "../../Validation/food"

/** Food based on particular restuarant
 * Route            /food/r/id
 * Desc             get all food based on particular restuarant
 * Params           id
 * method           GET
 * access           public
 */
Router.get("/r/:_id", async(req, res) => {
    
    try {
        // validation
        await ValidateRestuarantID(req.params)

        const { _id } = req.params
        const foods = await foodModel.find({ restuarant: _id})

        return res.json({ foods })

    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})

/** Food based on particular restuarant
 * Route            /:_id
 * Desc             get food based on item
 * Params           -id
 * method           GET
 * access           public
 */
Router.get("/:_id", async(req, res) => {
    
    try {
        const { _id } = req.params
        const foods = await foodModel.findById({_id})

        return res.json({ foods })

    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})

/** Food based on category
 * Route            /food/c/:category
 * Desc             get all food based on category
 * Params           id
 * method           GET
 * access           public
 * using regex
 */
Router.get("/c/:category", async( req, res) => {
    try {
        // validation
        await ValidateCategory(req.params)
        
        const { category } = req.params
        const foods = await foodModel.find({ 
            category: { $regex: category, $options: "i"}
        })

        return res.json({ foods })

    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})

// based on name, based on isVeg

export default Router;