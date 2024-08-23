import ConnectToDB from "@/configs/db";
import DiscountModel from "@/models/Discount";
export async function PUT(req:any) {
  try {
    const { code , user } = await req.json();
    ConnectToDB();
    if (!code.trim()) {
      return Response.json(
        { message: "field is not filled !!" },
        { status: 422 }
      );
    }
    const discountCode = await DiscountModel.findOne({ code }).populate(
      "productID"
    );
    if (!discountCode) {
      return Response.json(
        { message: "code is not exist !!" },
        { status: 419 }
      );
    }
    if (discountCode.uses === discountCode.maxUse) {
      return Response.json({ message: "code is expired !!" }, { status: 422 });
    }
    const isUsedUser = await DiscountModel.findOne({code , user})
    if(isUsedUser){
      return Response.json({message:"user  used this discount yet !!"} , {status:409})
    }
    await DiscountModel.findOneAndUpdate(
      { code },
      {
        $inc: {
          uses: 1,
        },
        $push:{
          user:user
        }
      }
    );
    return Response.json( {message:"کد با موفقیت اعمال شد" , discountCode} , {status:200});
  } catch (err) {
    return Response.json(
      { message: "unknown internal server error !!" },
      { status: 500 }
    );
  }
}
