import ConnectToDB from "@/configs/db";
import UserModel from "@/models/User";
import BanModel from "@/models/Ban";
export async function POST(req: any) {
  ConnectToDB();
  try {
    const { phone, email } = await req.json();
    if (!phone.trim() || !email.trim()) {
      return Response.json(
        { message: "data is not valid !!" },
        { status: 422 }
      );
    }
    const isExist = await UserModel.findOne({
      $or: [{ email }, { phone }],
    });
    if (isExist) {
        await UserModel.findOneAndUpdate(
            {
              $or: [{ email }, { phone }],
            },
            {
              $set:{
                  status:false
              }
            }
          );
    }
    const banUser = await BanModel.create({ email, phone });

    if (banUser) {
      return Response.json(
        { message: "user banned successfully : ))" },
        { status: 200 }
      );
    }
  } catch (err) {
    return Response.json({ message: process.env.serverError }, { status: 500 });
  }
}
