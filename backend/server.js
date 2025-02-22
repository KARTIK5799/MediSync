import express from "express";
import app from "./src/app.js";


const PORT = process.env.PORT || 7000;

app.use("/",(req,res)=>{
    res.send("hello");
});

app.listen(PORT,()=>{
    console.log(`Server Is Running On ${PORT}`);
})