//importing libraries
import express from "express"
import passport from "passport"

//database model
import { orderModel } from "../../database/allModels"
const Router = express.Router()

// get all the orders based on id  
/**
 * Route            /order/id
 * Desc             get all the orders based on id
 * Params           id
 * method           GET
 * access           public
 */
Router.get("/:_id", async( req, res) => {
    try {
        const { _id } = req.params
        const getOrders = await orderModel.findOne({ user: _id})
        
        if(!getOrders) {
            return res.status(404).json({ error: "User not found" })
        }

        return res.status(200).json({ orders: getOrders })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})

// add new order 
/**
 * Route            /order/new/:_id
 * Desc             add new order
 * Params           id
 * method           POST
 * access           public
 */
Router.post("/new/:_id", async( req, res) => {
    try {
        const { _id } = req.params
        const { orderDetails } = req.body
        const addNewOrder = await orderModel.findOneAndUpdate({  //appending to array 
            user: _id
        },
        {
            $push: { orderDetails }
        },
        {
            new: true
        }) 
        
        return res.json({ order: addNewOrder })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})

/** add order ratings
 * Route            /order/ratings
 * Desc            add order ratings
 * Params           id
 * method           GET
 * access           public
 */

export default Router;