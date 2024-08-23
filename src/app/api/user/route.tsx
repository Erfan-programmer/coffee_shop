import ConnectToDB from "@/configs/db";
import connectToDB from "@/configs/db";
import UserModel from "@/models/User";
import { generateAccessToken, hashPassword } from "@/utils/auth";
export async function POST(req: any) {
  connectToDB();
  try {
    const body = await req.json();
    const { name, phone, email, password } = body;

    // Validation (You)

    const isUserExist = await UserModel.findOne({
      $or: [{ name }, { email }, { phone }],
    });

    if (isUserExist) {
      return Response.json(
        {
          message: "The username or email or phone exist already !!",
        },
        {
          status: 422,
        }
      );
    }

    const hashedPassword = await hashPassword(password);
    const accessToken = generateAccessToken({ email });

    const users = await UserModel.find({});

    await UserModel.create({
      name,
      email,
      phone,
      password: hashedPassword,
      role: "ADMIN",
      status: true,
    });

    return Response.json(
      { message: "User created successfully :))" },
      {
        status: 201,
        headers: { "Set-Cookie": `token=${accessToken};path=/;httpOnly=true` },
      }
    );
  } catch (err) {
    return Response.json({ message: process.env.serverError }, { status: 500 });
  }
}

export async function GET() {
  ConnectToDB();
  try {
    const allUser = await UserModel.find({});
    return Response.json(allUser, { status: 200 });
  } catch (err) {
    return Response.json({ message: process.env.serverError }, { status: 500 });
  }
}
