import ConnectToDB from "@/configs/db";
import UserModel from "@/models/User";
import { isValidObjectId } from "mongoose";
import { cookies } from "next/headers";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  ConnectToDB();
  try {
    const { id } = params;
    if (!isValidObjectId(id)) {
      return new Response(JSON.stringify({ message: "Invalid user ID." }), {
        status: 400,
      });
    }

    const user = await UserModel.findOne({ _id: id });
    if (!user) {
      return new Response(
        JSON.stringify({ message: "User not found." }),
        { status: 404 }
      );
    }

    const response = new Response(
      JSON.stringify({ message: "User logged out successfully." }),
      { status: 200 }
    );

    // Set Cookie (Important: Use correct cookie headers!)
    response.headers.set("Set-Cookie", "token=; HttpOnly; Secure; SameSite=Strict; Path=/");
    return response;
  } catch (err) {
    console.error("Error during logout:", err);
    return new Response(JSON.stringify({ message: "Server error." }), {
      status: 500,
    });
  }
}
