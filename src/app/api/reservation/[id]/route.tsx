import ConnectToDB from "@/configs/db";
import ReserveModel from "@/models/Reservation";
import { isValidObjectId } from "mongoose";
export async function DELETE(req:any ,  {params}: any) {
  ConnectToDB();
  try {
    const { id } = params;
    if (!isValidObjectId(id)) {
      return Response.json({ message: "id is not valid" }, { status: 422 });
    }
    await ReserveModel.findOneAndDelete({ _id: id });
    return Response.json({ message: "رزرو با موفقیت حذف شد" } , {status:200});
  } catch (err) {
    
    return Response.json({ message: process.env.serverError }, { status: 500 });
  }
}
