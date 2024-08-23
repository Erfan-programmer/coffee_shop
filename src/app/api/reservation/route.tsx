import { authUser } from "@/utils/serverHelpers";
import ReservationModel from "@/models/Reservation";
import ConnectToDB from "@/configs/db";
import TimeModel from "@/models/time";
export async function POST(req: any) {
  ConnectToDB();
  try {
    const { username, phone, time, tableID } = await req.json();
    if (
      !username.trim() ||
      !phone.trim() ||
      !time.trim() ||
      tableID === 0
    ) {
      return Response.json({ message: "data is not valid" }, { status: 422 });
    }
    const user = authUser();
    if (!user) {
        return Response.json(
            { message: "first sign in in site" },
            { status: 409 }
        );
    }
    
    const isTableReserved = await ReservationModel.findOne({
        $and: [{ tableID }, { time }],
    });
  
    if (isTableReserved) {
        return Response.json(
            { message: "table reserved recently !!" },
            { status: 422 }
        );
    }
    await TimeModel.create({times:time , tableID, isReserved:true})
    await ReservationModel.create({
        username , phone , time , tableID
    })
    return Response.json(
      { message: "table reserved successfully : ))" },
      { status: 200 }
    );
  } catch (err) {
    return Response.json({ message: process.env.serverError }, { status: 500 });
  }
}
