import ConnectToDB from "@/configs/db";
import { isValidObjectId } from "mongoose";
import DiscountModel from "@/models/Discount"
export async function POST(req:any) {
  try {
    ConnectToDB();
    const { code, maxUse, percentage, productID } = await req.json();
    if(!code.trim() || !maxUse.trim() || !percentage.trim() || !productID.trim()){
        return Response.json({message:"your info is not valid !!"} , {status:422})
    }
    await DiscountModel.create({
        code,
        maxUse,
        percentage,
        productID,
        uses:0
    })
    return Response.json({message:"discount created successfully : ))"} , {status:201})
  } catch (err) {
    return Response.json({message:"unknown internal server error !!"} , {status:500})
  }
}

// export async function GET(){
//     try{
//         connectToDB();
//         await DiscountModel.find({})
//     }
//     catch(err){

//     }
// }
