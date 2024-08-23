import ConnectToDB from "@/configs/db";
import Image from "@/models/Image";
import ImageModel from "@/models/Image"
import path from "path";
import { writeFile } from "fs";
export async function POST(req: any) {
  ConnectToDB();
  try {
  const formState = await req.formData()
  const img = formState.get("img");
  const filename = Date.now() + img.name;

  // buffer
  const buffer = Buffer.from(await img.arrayBuffer());
  await writeFile(
    path.join(process.cwd(), "/public/uploads/" + filename),
    buffer,
    () => console.log("")
  );

  
  const imagePath = await ImageModel.create({
    name:filename,
    size:img.size,
    type:img.type,
    imgUrl: `http://localhost:3000/uploads/${filename}`,
  });

    return Response.json(
      { message: "image created successfully : ))" , imagePath},
      { status: 201 }
    );
  } catch (err) {
    return Response.json({ message: process.env.serverError }, { status: 500 });
  }
}
