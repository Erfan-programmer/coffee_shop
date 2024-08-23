import ConnectToDB from "@/configs/db";
import { isValidObjectId } from "mongoose";
import CommentModel from "@/models/Comment";
export async function PUT(req: any, { params }: any) {
  const { body } = await req.json();
  ConnectToDB();
  try {
    const { id } = params;
    if (!isValidObjectId(id)) {
      return Response.json(
        { message: "comment id is not valid !!" },
        { status: 419 }
      );
    }
    await CommentModel.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          body,
        },
      }
    );
    return Response.json(
      { message: "comment updated successfully !!" },
      { status: 200 }
    );
  } catch (err) {
    return Response.json({ message: process.env.serverError }, { status: 500 });
  }
}
