import ConnectToDB from "@/configs/db";
import connectToDB from "@/configs/db";
import UserModel from "@/models/User";
export async function PUT(req: any, { params }: any) {
  connectToDB();
  try {
    const body = await req.json();
    const { id } = params;
    const { name, phone, email } = body;
    // Validation (You)
    const isUserExist = await UserModel.findOne({ _id: id });

    if (!isUserExist) {
      return Response.json(
        {
          message: "The username or email or phone exist already !!",
        },
        {
          status: 422,
        }
      );
    }

    await UserModel.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          name,
          email,
          phone,
        },
      }
    );

    return Response.json(
      { message: "User updated successfully :))" },
      {
        status: 200
      }
    );
  } catch (err) {
    return Response.json({ message: process.env.serverError }, { status: 500 });
  }
}
