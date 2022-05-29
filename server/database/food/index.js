import mongoose from "mongoose"

const foodSchema = new mongoose.Schema({
    name: { type: String, required: true },
    desc: { type: String, required: true },
    isVeg: { type: Boolean, required: true },
    isContainEgg: { type: Boolean, required: true },
    category: { type: String, required: true},
    price: { type: Number, required: true, default: 150 },
    addOns: [
        {
            type: mongoose.Types.ObjectId,
            ref: "Foods"
        }
    ],
    photos: {
        type: mongoose.Types.ObjectId,
        ref: "Images"
    },
    restuarant: {
        type: mongoose.Types.ObjectId,
        ref: "Restuarants",
        required: true
    }
})

export const foodModel = mongoose.model("Foods",foodSchema)