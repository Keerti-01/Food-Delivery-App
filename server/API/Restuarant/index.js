//importing libraries
import express from "express"
import passport from "passport"

//database model
import { restuarantModel } from "../../database/allModels"

//validation
import { ValidateRestuarantCity, ValidateRestuarantSearchString } from "../../Validation/restuarant"
import { ValidateRestuarantID } from "../../Validation/food"

const Router = express.Router()

// get all restuarants based on city    
/**
 * Route            /restuarant/?city=hyd
 * Desc             get all the restuarants based on city
 * Params           none
 * method           GET
 * access           public
 * query            query params will be used
 * "".../?key=fhdhk"" ==> after the question mark whatever it is there is known as query params -> key = value
 */
Router.get("/", async(req, res) => {
    try {
        //validation
        await ValidateRestuarantCity(req.query)

        const { city } = req.query

        const allRestuarants = await restuarantModel.find({ city }) //donot use findOne becoz only one restuatrant will be selected
        return res.json({ allRestuarants })

    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
    
})

// get particular restuarant based on id
/**
 * Route            /restuarant/id
 * Desc             get individual the restuarant based on id
 * Params           id
 * method           GET
 * access           public
 */
Router.get("/:_id", async( req, res) => {
    try {
        //validation
        await ValidateRestuarantID(req.params)
        const { _id } = req.params
        const restuarant = await restuarantModel.findById({_id})
        //there is no rest
        if(!restuarant) return res.status(404).json({ error: "Restuarant not found" })
        //if there is restuarant exists
        return res.json({ restuarant })

    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})

// get restuarant based on search
// 2ways --> frontend (use search algo) and backend, frontend operation will cost us more , same with backend if we have n/w issue
//best way --> load on backend part--> then create route
/**
 * Route            /search
 * Desc             get restuarant details based on the search string
 * Params           none
 * Body             searchString
 * method           GET
 * access           public
 */
Router.get("/search", async( req, res ) => {
    try {
        //validation
        await ValidateRestuarantSearchString(req.body)
        
        const { searchString } = req.body
        // mongoose will write regex for us
        const restuarants = await restuarantModel.find({
            name: { $regex: searchString, $options: "i" }, //finding by name, using mongodb operators, i--> case-insensitive

        }) 
        //if restuarant not found
        if(!restuarants) return res.status(404).json({ error: `No Restuarants matched with ${searchString}`})

        return res.json({ restuarants })

    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})

export default Router