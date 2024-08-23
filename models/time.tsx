import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    times:{
        type:String,
        required:true
    },
    tableID:{
        type:Number,
        required:true
    },
    isReserved:{
        type:Boolean,
        default:false
    }
})

const model = mongoose.models.Time || mongoose.model("Time" , Schema)

export default model