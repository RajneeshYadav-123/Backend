// require ('dotenv').config({path: './env'})
import dotenv from "dotenv"
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDb from "./db/index.js";

dotenv.config({
    path:'./env'
})

connectDb()
/*
import express from "express"
const app=express()

//iffi//

(async ()=>{
    try{
     await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
     app.on("error",()=>{
        console.log("ERROR",error)
        throw error
     })
     app.listen(process.env.PORT,()=>{
        console.log(`App is listiong on port ${process.env.PORT}`);
     })
    }
    catch(error){
        console.error("error",error)
        throw error
    }
})()
   */ 