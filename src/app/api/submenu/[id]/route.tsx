import ConnectToDB from "@/configs/db";
import SubMenusModel from "@/models/SubMenus";
import { title } from "process";

export async function DELETE(req: any, { params }: any) {
  const { id } = params;

  ConnectToDB();
  try {
    const mainSubMenu = await SubMenusModel.findOneAndDelete({ _id: id });
    if (!mainSubMenu) {
      throw new Error();
    }
    return Response.json(
      { message: "SubMenu deleted successfully" },
      { status: 200 }
    );
  } catch (err) {
    return Response.json({ message: process.env.serverError }, { status: 500 });
  }
}

export async function PUT(req: any, { params }: any) {
  const { id } = params;
  const {      value,
    title,
    price,
    description,
    image, } =
    await req.json();
  ConnectToDB();
  try {
    const mainSubMenu = await SubMenusModel.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          value,
          title,
          price,
          description,
          image,
        },
      }
    );

    if (!mainSubMenu) {
      throw new Error();
    }
    return Response.json(
      { message: "SubMenu updated successfully" },
      { status: 200 }
    );
  } catch (err) {
    return Response.json({ message: process.env.serverError }, { status: 500 });
  }
}
