const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use("/AllImages", express.static("images"));

app.use(express.json());

app.use(cors());

const HouseRouter = require("../Backend/Router/HouseRouter");
const ContactRouter = require("../Backend/Router/ContactRouter");

app.use("/House", HouseRouter);
app.use("/Contact", ContactRouter);

mongoose.connect("mongodb://localhost:27017/Som-RentalsDB").then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log(err);
})

app.listen(9000, () => {
    console.log("Server is running on port 9000");
})
