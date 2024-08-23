import ConnectToDB from "@/configs/db";
import CategoryModel from "@/models/Category";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest | any) {
  ConnectToDB();
  const {title , label} = await req.json()
  try {
    if (!title.trim || !label.trim()) {
      return Response.json(
        { message: "title is not valid !!" },
        { status: 422 }
      );
    }
    const isExistMenu = await CategoryModel.findOne({
      $or:[{title} , {label}]
    })
    if(isExistMenu){
        return Response.json({message:"this category is added recently !!"} , {status:422})
    }
    const newCategory = await CategoryModel.create({ title , label });
    if (!newCategory) {
      throw new Error()
    }
    return Response.json(
      { message: "category created successfully :))" },
      { status: 201 }
    );
  } catch (err) {
    return Response.json({ message: process.env.serverError }, { status: 500 });
  }
}

export async function GET() {
  ConnectToDB();
  try {
    const allCategories = await CategoryModel.find({});
    if (!allCategories) {
      return Response.json({ message: "categories are not valid !!" });
    }
    return Response.json(allCategories, { status: 200 });
  } catch (err) {
    return Response.json({ message: process.env.serverError }, { status: 500 });
  }
}
