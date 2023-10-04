import { sendMail } from "@/lib/sendMail";
import { NextResponse } from "next/server";
var nodemailer = require("nodemailer");

export async function POST(request: Request) {
  const res = await request.json();
  if (request.body) {
    await sendMail(res.name, res.email, res.message);
    return NextResponse.json({ message: "Success" });
  }
  return new Response(null, {
    status: 500,
    statusText: "INTERNAL_SERVER_ERROR",
  });
}

//-----------------------------------------------------------------------------
