import ConnectToDB from "@/configs/db";
import CommentModel from "@/models/Comment";
import ProductModel from "@/models/Product";
export async function POST(req: any) {
  const { username, email, body, star, productID } = await req.json();
  
  ConnectToDB();
  try {
    if (!username.trim() || !email.trim() || !body.trim()) {
      return Response.json({ message: "data is not valid" }, { status: 422 });
    }
    const comment = await CommentModel.create({ username, email, body, star , productID });

    const newProduct = await ProductModel.findOneAndUpdate(
      { _id: productID },
      {
        $push: {
          comments:comment._id,
        },
      }
    );
    if (newProduct) {
      return Response.json({ message: "comment created successfully : ))" } , {status:201});
    }
  } catch (err) {
    
    return Response.json({ message: process.env.serverError }, { status: 500 });
  }
}
