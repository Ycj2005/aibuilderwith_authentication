import mongoose from "mongoose";

export default async function DBconnection() {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URI);
    if (connection) {
      console.log(
        "************  Your connection are build successfully  **************"
      );
    }
  } catch (error) {
    throw new Error("Mongodb cannot be connected for this issue : ", error);
  }
}
