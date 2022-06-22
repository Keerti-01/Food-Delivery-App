import mongoose from "mongoose"
require("dotenv").config();

export default async () => {
    return mongoose.connect( process.env.MONGODB_URI , {
        useNewUrlParser: true,
        useUnifiedTopology: true,  //useCreateIndex and useFindAndModify are not working
        
    })
}














// const url = process.env.MONGODB_URI

// mongoose.connect(url, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify: false
// })

// const dbConn = mongoose.connection;

// dbConn.on("error", console.error.bind(console, "connection error"))
// dbConn.on("open", function(){
//     console.log("DB connection successful")
// })

// module.exports = dbConn;

