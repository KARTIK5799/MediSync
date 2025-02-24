import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import { Roles } from "../global/enum";

const userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String, required:true,unique:true},
    password:{typer:String,required:true},
    role: { 
        type: String, 
        enum: Object.values(Roles),
        default: Roles.USER 
      },
      phone:{type:String},
      
    
})