import mongoose from "mongoose"

const restuarantSchema = new mongoose.Schema({
    name: { type:String, required: true },
    city: { type:String, required: true },
    address: { type:String, required: true },
    mapLocation: { type:String, required: true },
    cuisine: [String],
    restuarantTimings: String,
    contactNumber: Number,
    website: String,
    popularDishes: [String],
    averageCost: Number,
    amenties: [String],
    menuImages: {
        type: mongoose.Types.ObjectId,
        ref: "Images"
    },

    menu: {
        type: mongoose.Types.ObjectId,
        ref: "Menus"
    },

    reviews: [{
        type: mongoose.Types.ObjectId,
        ref: "Reviews"
    }],

    photos: {
        type: mongoose.Types.ObjectId,
        ref: "Images"
    }
})

export const restuarantModel = mongoose.model("Restuarants",restuarantSchema)