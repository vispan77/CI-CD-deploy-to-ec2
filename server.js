import express from "express";
const app = express();
import dotenv from "dotenv";
import dbConnect from "./config/dbConnect.js";
dotenv.config();

dbConnect();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World From the Amazon EC2 Instance");
})

app.get("/about", (req, res) => {
    return res.status(200).json({
        success: true,
        message: "This Website is created by Vishal Pandey"
    })
})

app.get("/health", (req, res) => {
    return res.status(200).json({
        success: true,
        message: "This websit is working smoothly"
    })
})

app.get("/me", (req, res) => {
    return res.status(200).json({
        success: true,
        message: "This is Vishal Pandey"
    })
})

const port = process.env.PORT || 7000;
app.listen(port, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})
