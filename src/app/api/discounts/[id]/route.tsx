import ConnectToDB from "@/configs/db";
import { isValidObjectId } from "mongoose";
import DiscountModel from "@/models/Discount";
export async function DELETE(re1: any, { params }: any) {
  ConnectToDB();
  try {
    const { id } = params;
    if (!isValidObjectId(id)) {
      return Response.json({ message: "id is not valid !!" }, { status: 422 });
    }
    const discount = await DiscountModel.findOneAndDelete({ _id: id });
    if (discount) {
      return Response.json(
        { message: "discount deleted successfully : ))" },
        { status: 200 }
      );
    }
  } catch (err) {}
}
