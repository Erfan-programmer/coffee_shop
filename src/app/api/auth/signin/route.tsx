import ConnectToDB from "@/configs/db"
import UserModel from "@/models/User"
import { generateAccessToken, verifyPassword } from "@/utils/auth"
export async function POST(req:any){
    ConnectToDB()
    try{
        const {email , password} = await req.json()
        if(!email.trim() ||  !password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[\$|\&|\@|\#])(?=.*\d)(?=.*[^\da-zA-Z]).{8,15}$/g)){
            return Response.json({message:"email or password is not valid !!"} , {status:422})
        }
        const findUser = await UserModel.findOne({email})
        if(!findUser){
            return Response.json({message:"user is not found with these email or password !!"} , {status:409})
        }
        const isValidPassword = await verifyPassword(password , findUser.password)

        if(!isValidPassword){
            return Response.json({message:"user password is not valid !!"} , {status:409})
        }
        const tokenPayload = generateAccessToken({email})
        return Response.json({message:"user logged in successfully : )" },{ status:200, headers: {
            "Set-Cookie": `token=${tokenPayload};path=/;httpOnly=true;`,
    }})
    }
    catch(err){
        return Response.json({ message: process.env.serverError }, { status: 500 });
    }
}