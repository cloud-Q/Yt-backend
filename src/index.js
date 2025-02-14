import dotenv from 'dotenv';
import connectDB from "./db/index.js";
import { app } from "./app.js";

// import express from 'express';
// const app = express();


dotenv.config({
    path: './env'
});


connectDB().then(()=>{
    app.on('error', (error)=>{
        console.log('ERR: ', error);
        throw error
    });
    app.listen(process.env.PORT || 8000, () => {
        console.log(` @ Server is running at port : ${process.env.PORT}`)
    })
})
.catch((err)=> {
    console.log('MONGO db connection failed !!! ', err);
})















// alternate code but we are going to follow above written code
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