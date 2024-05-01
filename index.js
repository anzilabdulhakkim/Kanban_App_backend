const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 9090;
const server = express();
const connection = require("./config/db")
const authRouter = require("./routes/authRoutes");
const taskRouter = require("./routes/taskRoutes");
require('dotenv').config();


server.use(cors());
server.use(express.json());
server.use("/auth", authRouter);
server.use("/tasks", taskRouter);

server.get("/", (req, res) => {
    res.send("Home Page");
})

server.listen(PORT, async()=>{
    try {
        await connection;
        console.log(`Server is running on Port: ${PORT} and database is connected.`); 
    } 
    catch (error) {
        console.log(error);
    }
})
