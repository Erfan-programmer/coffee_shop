import ConnectToDB from "@/configs/db";
import MenusModel from "@/models/Menus";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest | any) {
  ConnectToDB();
  const { label, value } = await req.json();
  try {
    if (!label.trim() || !value) {
      return Response.json(
        { message: "title is not valid !!" },
        { status: 422 }
      );
    }

    const isExistMenu = await MenusModel.findOne({ 
      $or:[{label} , {value}]
     });
    if (isExistMenu) {
      return Response.json(
        { message: "this menu is added recently !!" },
        { status: 422 }
      );
    }
    const newMenu = await MenusModel.create({ label , value });
    if (!newMenu) {
      throw new Error();
    }
    return Response.json(
      { message: "Menu created successfully :))" },
      { status: 201 }
    );
  } catch (err) {
    return Response.json({ message: process.env.serverError }, { status: 500 });
  }
}

export async function GET() {
  ConnectToDB();
  try {
    const allMenus = await MenusModel.find({});
    if (!allMenus) {
      return Response.json({ message: "Menus are not valid !!" });
    }
    return Response.json(allMenus, { status: 200 });
  } catch (err) {
    return Response.json({ message: process.env.serverError }, { status: 500 });
  }
}
