import dotenv from 'dotenv'
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})
connectDB()
















// "Immediately Invoked Function Expression" (IIFE), which is a JavaScript function that is executed immediately after it's defined
/*
;( async () => {
    try {
        await mongoose.connect(`${process.env.MONOODB_URI}/${DB_NAME}`)
    } catch (error) {
        console.error('Error: ', error)
        throw err
        
    }
})()
*/