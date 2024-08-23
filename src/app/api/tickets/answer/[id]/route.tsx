import ConnectToDB from "@/configs/db";
import TicketModel from "@/models/Ticket";
import { isValidObjectId } from "mongoose";

export async function PUT(req: any, { params }: any) {
  ConnectToDB();
  try {
    const { id } = params;
    if (!isValidObjectId(id)) {
      return Response.json({ message: "id is not valid !!" }, { status: 409 });
    }
    const ticket = await TicketModel.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          isFinished: true,
        },
      }
    );
    if (!ticket) {
      throw new Error();
    }
    return Response.json(
      { message: "ticket closed successfully : ))" },
      { status: 200 }
    );
  } catch (err) {
    return Response.json({ message: process.env.serverError }, { status: 500 });
  }
}
export async function DELETE(req: any, { params }: any) {
  ConnectToDB();
  try {
    const { id } = params;
    if (!isValidObjectId(id)) {
      return Response.json({ message: "id is not valid !!" }, { status: 409 });
    }
    const ticket = await TicketModel.findOneAndDelete({ _id: id });
    const ticketAnswer = await TicketModel.findOneAndDelete({ mainTicket: id });
    if (!ticket || !ticketAnswer) {
      throw new Error();
    }
    return Response.json(
      { message: "ticket and answers deleted successfully : ))" },
      { status: 200 }
    );
  } catch (err) {
    
    return Response.json({ message: process.env.serverError }, { status: 500 });
  }
}
