const express = require("express");
const app = express();
const testRoute = require("./route")

app.use("/api",testRoute)

app.listen(3000,()=>{
    console.log("server is listening")
})