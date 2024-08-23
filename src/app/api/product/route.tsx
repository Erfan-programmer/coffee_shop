import ConnectToDB from "@/configs/db";
import ProductModel from "@/models/Product";
import { writeFile } from "fs";
import path from "path";
export async function POST(req: any) {
  ConnectToDB();
  try {
    const {title,category,shortDescription,longDescription,labels,img , price} = await req.json()
    if(!title.trim() || !price || !shortDescription.trim() || !longDescription.trim() || !category.trim() || labels.length === 0){
       return Response.json({message:"data is not valid !!"} , {status:422})
    }
   
    const product = await ProductModel.create({
      title,
      shortDescription,
      longDescription,
      scores: 0,
      price,
      category,
      labels,
      countAvailable: 23,
      img,
    });
    return Response.json(
      { message: "product created successfully : ))", product },
      { status: 201 }
    );
  } catch (err) {
    return Response.json({ message: process.env.serverError }, { status: 500 });
  }
}
