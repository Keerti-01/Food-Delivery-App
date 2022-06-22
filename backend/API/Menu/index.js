//importing libraries
import express from "express"
import passport from "passport"

//database model
import { menuModel, imageModel} from "../../database/allModels"

//validation
import { ValidateRestuarantID } from "../../Validation/food"

const Router = express.Router()

/** menu based on id --> only food data, no images data
 * Route            /menu/list/id
 * Desc             get all list menu based on id
 * Params           id (restuarant-id)
 * method           GET
 * access           public
 */
Router.get("/list/:_id", async(req, res) => {
    try {
        await ValidateRestuarantID(req.params)

        const { _id } = req.params
        const menus = await menuModel.findOne(_id)

        return res.json(menus)

    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
    
})


/** menu images based on id 
 * Route            /menu/images/id
 * Desc             get all menu images based on id
 * Params           id(restuarant id)
 * method           GET
 * access           public
 */
 Router.get("/image/:_id", async(req, res) => {
    try {
        await ValidateRestuarantID(req.params)
        
        const { _id } = req.params
        const menuImages = await imageModel.findOne(_id)

        return res.json(menuImages)

    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
    
})

// @Route   POST /menu/new
// @des     add new menu
// @access  PUBLIC
Router.post("/new", async (req, res) => {
    try {
      const { menuData } = req.body;
  
      if (menuData._id) {
        const updateMenu = await menuModel.findByIdAndUpdate(
          menuData._id,
          {
            $push: {
              menus: { $each: menuData.menus },
            },
          },
          { new: true }
        );
  
        return res.json({ menu: updateMenu });
      }
  
      const createNewMenu = await menuModel.create(menuData);
  
      return res.json({ menu: createNewMenu });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });

export default Router;