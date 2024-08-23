import ConnectToDB from "@/configs/db"
import CategoryModel from "@/models/Category"
import { title } from "process"

export async function DELETE(req:any , {params}:any){
    const {id} = params

    ConnectToDB()
    try{
      const mainCategory = await CategoryModel.findOneAndDelete({_id:id})
      if(!mainCategory){
        throw new Error()
      }
      return Response.json({message:"category deleted successfully"} , {status:200})
    }
    catch(err){
    return Response.json({ message: process.env.serverError }, { status: 500 })
    }
}

export async function PUT(req:any , {params}:any){
    const {id} = params
    const {title , label} = await req.json()
    ConnectToDB()
    try{
      const mainCategory = await CategoryModel.findOneAndUpdate({_id:id}, {
        $set:{
            title,
            label
        }
      })

      if(!mainCategory){
        throw new Error()
      }
      return Response.json({message:"category updated successfully"} , {status:200})
    }
    catch(err){
    return Response.json({ message: process.env.serverError }, { status: 500 })
    }
}