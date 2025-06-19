//require("dotenv").config({path: "./.env"})
//but this contradicts with the module import type in package.json
//there is a solution to this problem, where we use the import statement to import the dotenv package and then call the config method on it. This will allow us to use the environment variables in our code without having to use require. The solution is as follows:
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({ path: "./.env" });

connectDB();

/*
import express from "express"
const app = express()

( async () => {
    try {
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       app.on("error", (error) => {
        console.log("ERROR: ", error);
        throw error
       })

       app.listen(process.env.PORT, () => {
        console.log(`App is listening on port ${process.env.PORT}`);
       })

    } catch (error) {
        console.error("ERROR: ",error)
        throw err
    }
})()
    */
