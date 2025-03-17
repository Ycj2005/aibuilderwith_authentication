import usermodel from "@/Database/models/user.model";
import DBconnection from "@/Database/db.connection";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(request) {
  const { email, password, name,purpose } = await request.json();
  try {
    await DBconnection();
    const userfound = await usermodel.findOne({ email });
    if (userfound) {
      return NextResponse.json({
        status: 400,
        message: "This email already exist",
      });
    }
    const hashPassword = await bcrypt.hash(password, 10);

    const user = new usermodel({
      email,
      name,
      password: hashPassword,
      purpose
    });

    const usersave = await user.save();
    if (usersave) {
      return NextResponse.json({
        status: 200,
        message: "Your data: ",
        data: usersave,
      });
    }

  } catch (error) {
    // console.log("error from route : ", error);

    return NextResponse.json({
      status: 500,
      message: "Your data has not posted successfully ",
      error: error,
    });
  }
}
