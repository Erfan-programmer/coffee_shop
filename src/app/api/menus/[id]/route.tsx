import ConnectToDB from "@/configs/db";
import MenusModel from "@/models/Menus";
import { title } from "process";

export async function DELETE(req: any, { params }: any) {
  const { id } = params;

  ConnectToDB();
  try {
    const mainMenu = await MenusModel.findOneAndDelete({ _id: id });
    if (!mainMenu) {
      throw new Error();
    }
    return Response.json(
      { message: "Menu deleted successfully" },
      { status: 200 }
    );
  } catch (err) {
    return Response.json({ message: process.env.serverError }, { status: 500 });
  }
}

export async function PUT(req: any, { params }: any) {
  const { id } = params;
  const { label, value } = await req.json();
  ConnectToDB();
  try {
    const mainMenu = await MenusModel.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          label,
          value,
        },
      }
    );

    if (!mainMenu) {
      throw new Error();
    }
    return Response.json(
      { message: "Menu updated successfully" },
      { status: 200 }
    );
  } catch (err) {
    return Response.json({ message: process.env.serverError }, { status: 500 });
  }
}
