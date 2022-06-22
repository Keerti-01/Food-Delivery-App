//importing libraries
import express from "express"
import passport from "passport"
import ReviewCard from "../../../client/src/Components/restuarant/Reviews/ReviewCard"

//database model
import { reviewModel } from "../../database/allModels"
//validation
import { ValidateReviewData } from "../../Validation/review"
import { ValidateUserID } from "../../Validation/user"

const Router = express.Router()

/**
 * Route            /
 * Desc             Get all review
 * Params           resid
 * Body             none
 * method           get
 * access           public
 */

 Router.get("/:resid", async(req, res) => {
    try {
       const reviews = await reviewModel.find({restuarant: req.params.resid})
         return res.json({ reviews })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})


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
        await ValidateReviewData(req.body)
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
        await ValidateUserID(req.params)
        const { _id } = req.params

         await reviewModel.findByIdAndDelete(_id) 
         return res.json({ review: "Successfully deleted review"})
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})


export default Router;