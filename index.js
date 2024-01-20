import express from "express";
import fs from "fs";

const app = express();

app.get('/profile', (req, res)=>{
    res.status(200).send("Hello world This is my first hosting on cyclic")
})


const PORT = process.env.PORT || 8000;
app.listen(PORT, ()=>{
    console.log("Server is listening on the port " + PORT);
})