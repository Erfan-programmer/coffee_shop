import ConnectToDB from "@/configs/db";
import SubMenu from "@/models/SubMenus";
import { isValidObjectId } from "mongoose";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest | any) {
  ConnectToDB();
  const { value, title, price, description, image } = await req.json();
  try {
    if (
      !title.trim ||
      !value  ||
      !description.trim() ||
      !price ||
      !image.trim()
    ) {
      return Response.json(
        { message: "information is not valid and enough !!" },
        { status: 422 }
      );
    }
    const isExistSubMenu = await SubMenu.findOne({ title });
    if (isExistSubMenu) {
      return Response.json(
        { message: "this Submenu is added recently !!" },
        { status: 422 }
      );
    }
    const newMenu = await SubMenu.create({
      value,
      title,
      price,
      description,
      image,
    });
    if (!newMenu) {
      throw new Error();
    }
    return Response.json(
      { message: "Submenu created successfully :))" },
      { status: 201 }
    );
  } catch (err) {
    return Response.json({ message: process.env.serverError }, { status: 500 });
  }
}

export async function GET() {
  ConnectToDB();
  try {
    const allSubMenus = await SubMenu.find({});
    if (!allSubMenus) {
      return Response.json({ message: "Menus are not valid !!" });
    }
    return Response.json(allSubMenus, { status: 200 });
  } catch (err) {
    return Response.json({ message: process.env.serverError }, { status: 500 });
  }
}
