import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    size:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    imgUrl:{
        type:String,
        required:true
    }
})

const model = mongoose.models?.Image || mongoose.model("Image" , Schema)
export default model