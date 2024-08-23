import ConnectToDB from "@/configs/db";
import TimeModel from "@/models/time";
export async function GET() {
  ConnectToDB();
  try {
    const times = await TimeModel.find({});
    const tableFull =  times.filter((time:any)=> time.tableID)
    return Response.json({ times }, { status: 200 });
  } catch (err) {
    return Response.json({ message: process.env.serverError }, { status: 500 });
  }
}


export async function POST(req: any) {
  ConnectToDB();
  try {
    const { times , tableID , isReserved} = await req.json();
    await TimeModel.create({ times , tableID , isReserved});
    return Response.json(
      { message: "time added successfully : ))" },
      { status: 201 }
    );
  } catch (err) {
    return Response.json({ message: process.env.serverError }, { status: 500 });
  }
}
