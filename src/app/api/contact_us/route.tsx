import ConnectToDB from "@/configs/db"
import ContactUsModel from "@/models/ContactUs"
export async function POST(req:any){
    ConnectToDB()
    try{
        const {username , email , post} = await req.json()
        if(!username.trim() || !email.trim() || !post.trim()){
            return Response.json({message:" اطلاعات این کاربر قبلا ثبت شده است"} , {status:422})
        }
      const newContacts = await ContactUsModel.create({
        username , email , post
      })
      if(newContacts){

        return Response.json({message:"اطلاعات تماس با موفقیت ثبت شد"} , {status:201})
      }

    }
    catch(err){
    return Response.json({ message: process.env.serverError }, { status: 500 });
    }
}