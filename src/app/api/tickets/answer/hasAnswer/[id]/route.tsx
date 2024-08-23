import ConnectToDB from "@/configs/db";
import TicketModel from "@/models/Ticket";
import { isValidObjectId } from "mongoose";

export async function PUT(re: any, { params }: any) {
  ConnectToDB();
  try {
    const { id } = params;
    if (!isValidObjectId(id)) {
      return Response.json({ message: "id is not valid !!" }, { status: 422 });
    }
    const ticket = await TicketModel.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          hasAnswer: true,
        },
      }
    );
    if (ticket) {
      return Response.json(
        { message: "ticket updated successfully : ))" },
        { status: 200 }
      );
    }
  } catch (err) {
    return Response.json({ message: process.env.serverError }, { status: 500 });
  }
}
