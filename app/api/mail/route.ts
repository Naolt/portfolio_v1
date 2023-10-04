import { sendMail } from "@/lib/sendMail";
import { NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";

interface RequestBody {
  name: string;
  email: string;
  message: string;
}

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  try {
    const { name, email, message }: RequestBody = await request.body;

    if (name && email && message) {
      await sendMail(name, email, message);
      return NextResponse.json({ message: "Success" });
    } else {
      return NextResponse.json(
        { error: "Missing required fields: name, email, message" },
        { status: 500 }
      );
    }
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
