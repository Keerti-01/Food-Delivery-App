import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
    fullname: { type: String, required: true },
    email: { type: String, required: true},
    password: { type: String },
    address: [{ details: { type: String }, for: { type: String } }],
    phoneNumber: [{ type: Number }]
},{
    timestamps: true     //timestamps are always passed as 2nd arg, it returns 2 things:::: createdAt  , updatedAt
});

//create method for jwt
userSchema.methods.generateJwtToken = function() {
    return jwt.sign( { user: this._id.toString() }, "zomatoApp" ) //this refers to user object
}

// define static and methods
userSchema.statics.findByEmailAndPhone = async ({email, phoneNumber}) => {
    //check whether email and phone number exists
    const checkUserbyEmail = await userModel.findOne({ email });
    const checkUserbyPhone = await userModel.findOne({ phoneNumber });

    if(checkUserbyEmail || checkUserbyPhone) {
        throw new Error("User already exists...!!")
        //return res.json({ error: "User already exists" })
    }
    return false
}

//for signin
userSchema.statics.findByEmailAndPassword = async ({email, password}) => {
    //check email
    const user = await userModel.findOne({ email });
    if(!user) throw new Error("User does not exist!!...please Signup") //if returns null

    //if userr exists, compare passwords
    const doesPasswordMatch = await bcrypt.compare(password, user.password) //(new, old)
    if(!doesPasswordMatch) throw new Error("Invalid Password!!!")

    return user;
}

userSchema.pre("save", function (next) {  
    const user = this;

    //check the password is modified
    if(!user.isModified("password")) return next();  //isMdodified is inbuilt function in mongoose

    //generate bcrypt salt
    bcrypt.genSalt(8, (error, salt) => {
        if(error) return next(error)
        
        //hash the password
        bcrypt.hash(user.password, salt, (error, hash) => {
            if(error) return next(error)

            //assigning the hashed password
            user.password = hash
            return next()
        })
    })

})

export const userModel = mongoose.model("Users",userSchema)

//pre used in certain stages of updation/creation
    // save is used to run it while creating anew data, eg: in hashed password we are creating new data(await userModel.create), 
    // save function will be trigerred while creating new data
    // here we are using normal function beause we will be using "this" keyword