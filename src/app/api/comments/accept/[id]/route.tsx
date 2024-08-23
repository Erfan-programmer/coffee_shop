import ConnectToDB from "@/configs/db";
import CommentModel from "@/models/Comment";
import { isValidObjectId } from "mongoose";
export async function PUT(req:any, { params }:any) {
  try {
    ConnectToDB();
    const { id } = params;
    if (isValidObjectId(id)) {
      await CommentModel.findOneAndUpdate(
        { _id: id },
        {
          $set: {
            isAccept: true,
          },
        }
      );
      return Response.json(
        { message: "comment accepted successfully : ))" },
        { status: 200 }
      );
    }
  } catch (err) {
    return Response.json(
      { message: "unknown internal server error !!" },
      { status: 500 }
    );
  }
}
