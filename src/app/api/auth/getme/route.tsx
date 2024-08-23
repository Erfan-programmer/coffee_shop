import ConnectToDB from "@/configs/db";
import UserModel from "@/models/User";
import { verifyAccessToken } from "@/utils/auth";
import { cookies } from "next/headers";

export async function GET() {
  ConnectToDB();
  try {
    const token = cookies().get("token");
    const verifyToken: any = verifyAccessToken(token?.value);
    const findUser = await UserModel.findOne({ email: verifyToken.email });
    if (!verifyToken) {
      throw new Error();
    }
    return Response.json(findUser , {status:200})
  } catch (err) {
    return Response.json({ message: process.env.serverError }, { status: 500 });
  }
}
