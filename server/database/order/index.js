import mongoose from "mongoose"

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: "Users"
    },
    orderDetails: [{
        food: { type: mongoose.Types.ObjectId, ref: "Foods"},
        quantity: { type: Number, required: true },
        paymode: { type: String, required: true},
        status: { type: String, default: "Placed"},
        paymentDetails: { 
            itemTotal: { type: Number, required: true },
            promo: { type: Number, required: true},   //promo is the discount amount not the promo code eg: amt=2000, promo_code=NEW500, promo=amt-promo_code = 2000-500 = 1500(promo) 
            tax: { type: Number, required: true }
        }
    }],
    orderRatings: {
        type: Number,
        required: true
    }
},{
    timestamps: true
})

export const orderModel = mongoose.model("Orders",orderSchema)