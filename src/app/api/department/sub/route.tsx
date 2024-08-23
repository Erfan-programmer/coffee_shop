import connectToDB from "@/configs/db";
import SubDepartmentModel from "@/models/SubDepartment";
import { isValidObjectId } from "mongoose";

export async function POST(req:any) {
  try {
    connectToDB();
    const body = await req.json();
    const { title, department } = body;

    // Valid Title ✅
    if(!title.trim() || !isValidObjectId(department)){
      return Response.json({message:"data is not valid !!"} , {status:422})
    }
    await SubDepartmentModel.create({ title, department });

    return Response.json(
      { message: "SubDepartment created successfully :))" },
      { status: 200 }
    );
  } catch (err) {
    return Response.json({ message: err }, { status: 500 });
  }
}
