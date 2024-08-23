import ConnectToDB from "@/configs/db"
import ImageModel from "@/models/Image";

export async function DELETE(req:any , {params}:any){
    ConnectToDB()
    try{
        const {id} = params
        const imageFind = await ImageModel.findOneAndDelete({_id:id})
        if(imageFind){
            return Response.json({message:"image deleted successfully : ))" , } ,{status:200} )
        }
    }
    catch(err){
        return Response.json({ message: process.env.serverError }, { status: 500 });
    }
}

export async function GET(req:any , {params}:any){
    ConnectToDB()
    try{
        const {id} = params
        const imageFind = await ImageModel.findOne({_id:id})
        if(imageFind){
            return Response.json({imageFind} ,{status:200} )
        }
    }
    catch(err){
        return Response.json({ message: process.env.serverError }, { status: 500 });
    }
}