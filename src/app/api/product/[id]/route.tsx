import ConnectToDB from "@/configs/db";
import ProductModel from "@/models/Product";
import { log } from "console";

export async function PUT(req: any, { params }: any) {
  ConnectToDB();
  try {
    const {
      title,
      img,
      shortDescription,
      longDescription,
      category,
      labels,
      countAvailable,
    } = await req.json();
    const { id } = params;
    if (
      !title.trim() ||
      !shortDescription.trim() ||
      !longDescription.trim() ||
      !category.trim() ||
      labels.length === 0
    ) {
      return Response.json(
        { message: "data is not valid !!" },
        { status: 422 }
      );
    }
    await ProductModel.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          title,
          img,
          shortDescription,
          longDescription,
          category,
          labels,
          countAvailable,
        },
      }
    );

    return Response.json(
      { message: "product updated successfully : ))" },
      { status: 200 }
    );
  } catch (err) {
    return Response.json({ message: process.env.serverError }, { status: 500 });
  }
}
export async function DELETE(req:any , { params }: any) {
  ConnectToDB();
  try {
    const { id } = params;
    const user = await ProductModel.findOneAndDelete({ _id: id });
    if (user) {
      return Response.json(
        { message: "product delete successfully : ))" },
        { status: 200 }
      );
    }
  } catch (err) {
    
    return Response.json({ message: process.env.serverError }, { status: 500 });
  }
}
