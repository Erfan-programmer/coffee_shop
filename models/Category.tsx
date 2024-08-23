import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    label:{
        type:String,
        required:true
    }
})
const model = mongoose.models?.Category || mongoose.model("Category" , Schema)

export default model