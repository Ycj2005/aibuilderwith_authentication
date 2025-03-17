import { OpenAI } from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_SECRETE_KEY,
});

export async function POST(req) {
  const body = await req.json();
  console.log("open ai api route  : ", body.text);

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: body.text }],
      temperature: 1,
      max_tokens: 100,
    });
    console.log(response.choices[0].message.content);
    return NextResponse.json({
      status: 200,
      message: "your response : ",
      data: response.choices[0].message.content,
    });
  } catch (error) {
    console.log("your error response", error);
    return NextResponse.json({
      status: 500,
      message: "Something went wrong !",
      error,
    });
  }
}
