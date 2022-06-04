import mongoose from "mongoose"

const reviewSchema = new mongoose.Schema({
    food: { type: mongoose.Types.ObjectId, ref: "Foods"},
    restuarant: { type: mongoose.Types.ObjectId, ref: "Restuarants" },
    users: { type: mongoose.Types.ObjectId, ref: "Users" },
    rating: { type: Number, required: true},
    reviewText: { type: String, required: true },
    photos: [{
        type: mongoose.Types.ObjectId,
        ref: "Images"
    }],
    isFoodReview: Boolean,
    isRestuarantReview: Boolean
},{
    timestamps: true
})

export const reviewModel = mongoose.model("Reviews", reviewSchema)