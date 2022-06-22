require("dotenv").config();
//importing libraries
import express from "express"
import passport from "passport"
import multer from "multer" //accepts image from user and store it in memory until api is done uploading to server

//database model
import { imageModel } from "../../database/allModels"

//validation
import { ValidateImage } from "../../Validation/image"

const Router = express.Router()

//utilities
import { s3Upload } from "../../Utils/AWS/s3"

//multer config
const storage = multer.memoryStorage()
const upload = multer({ storage })

/** Food based on particular restuarant
 * Route            /image
 * Desc             uploads given image to s3 bucket and saves file link to mongodb
 * Params           none
 * method           POST
 * access           public
 */
//upload.single("file")--> uploading single file
//upload.array("file", limit)--> uploading multiple files
Router.post("/", upload.array("file", 4), async(req, res) => {  //multer willbe 2nd arg
    try {
        await ValidateImage(req.files)
        
        const file = req.files;

        //s3 bucket options
        const bucketOptions = {
            Bucket: "food-app-proj",
            Key: file.originalname,
            Body: file.buffer,
            ContentType: file.mimetype,
            //ACL: "public-read" // acl -> access control list , pulbic-read -> read-only
        }

        const uploadImage = await s3Upload(bucketOptions)

        return res.status(200).json({ uploadImage })

    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})

/*
Route     /
Des       Get Image details
Params    _id
Access    Public
Method    GET  
*/
Router.get("/:_id", async (req, res) => {
    try {
      const image = await imageModel.findById(req.params._id);
  
      return res.json({ image });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });


export default Router;