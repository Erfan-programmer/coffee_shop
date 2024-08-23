
import { hash, compare } from "bcryptjs";
import { sign, verify } from "jsonwebtoken";

const hashPassword = async (password:any) => {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
};

const verifyPassword = async (password: string, hashPass: string) => {
  const isValidPass = await compare(password, hashPass);
  return isValidPass;
};

const generateAccessToken = (data: any) => {
  const generatedTokenFunc = sign(
    { ...data },
    process.env.privateKey as string,
    {
      expiresIn: "60d",
    }
  );
  return generatedTokenFunc;
};

const verifyAccessToken = (data: any) => {
  const isValidToken = verify(data, process.env.privateKey as string);
  try {
    return isValidToken;
  } catch (err) {
    return false;
  }
};

const generateRefreshToken = (data: any) => {
  const generateUserRefreshToken = sign(
    { ...data },
    process.env.privateKey as string,
    {
      expiresIn: "60d",
    }
  );
  return generateUserRefreshToken;
};


const valiadteEmail = (email:string) => {
  const pattern = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/g;
  return pattern.test(email);
};

const valiadtePhone = (phone:string) => {
  const pattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/g;
  return pattern.test(phone);
};

const valiadtePassword = (password:string) => {
  const pattern =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/g;
  return pattern.test(password);
};
export {
  valiadteEmail,
  valiadtePhone,
  valiadtePassword,
  hashPassword,
  verifyPassword,
  generateAccessToken,
  verifyAccessToken,
  generateRefreshToken,
};
