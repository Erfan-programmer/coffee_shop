import mongoose from "mongoose";


const schema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    post:{
        type:String,
        required:true
    }
})

const model = mongoose.models?.ContactUS || mongoose.model("ContactUs" , schema)
export default model