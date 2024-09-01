import ConnectToDB from "@/configs/db";
import UserModel from "@/models/User";
import { isValidObjectId } from "mongoose";
import { cookies } from "next/headers";

export async function generateStaticParams() {
  // Connect to the database
  await ConnectToDB();
  
  // Fetch all user IDs from the database
  const users = await UserModel.find({}, '_id'); // Only fetching the '_id' field
  const paths = users.map((user) => ({
    params: { id: user._id.toString() },
  }));
  
  return paths;
}

export async function POST(req: any, { params }: any) {
  await ConnectToDB();
  try {
    const { id } = params;
    if (!isValidObjectId(id)) {
      return Response.json({ message: "id is not valid !!" }, { status: 409 });
    }
    const user = await UserModel.findOne({ _id: id });
    if (!user) {
      return Response.json(
        { message: "user is not found !!" },
        { status: 409 }
      );
    }
    cookies().delete("token");
    return Response.json(
      { message: "user log out successfully" },
      { status: 200 }
    );
  } catch (err) {
    return Response.json({ message: process.env.serverError }, { status: 500 });
  }
}
