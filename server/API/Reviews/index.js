//importing libraries
import express from "express"
import passport from "passport"

//database model
import { reviewModel } from "../../database/allModels"
const Router = express.Router()

// posting food/restuarant review
/**
 * Route            /review/new
 * Desc             add new food/restuarnt review
 * Params           none
 * Body             review object
 * method           POST
 * access           public
 */
Router.post("/new", async(req, res) => {
    try {
    
        const { reviewData } = req.body

         await reviewModel.create(reviewData) //creatinf new review
         return res.json({ review: "Successfully created review"})
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})

// deleteing food/restuarant review
/**
 * Route            /delete/_id
 * Desc             delete food/restuarnt review
 * Params           id
 * Body             none
 * method           DELETE
 * access           public
 */
 Router.delete("/delete/:_id", async(req, res) => {
    try {
    
        const { _id } = req.params

         await reviewModel.findByIdAndDelete(_id) 
         return res.json({ review: "Successfully deleted review"})
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})


export default Router;