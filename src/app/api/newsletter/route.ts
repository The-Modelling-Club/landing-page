import NewsLetter from "./model/newsletter";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  const { email } = (await req.json()) as { email: string };

  try {
    if (!email) {
      return NextResponse.json({ message: "Provide your email address" }, { status: 400 });
    }

    const emailExists = await NewsLetter.findOne({ email });

    if (emailExists) {
      return NextResponse.json({ message: "Email already exists!" }, { status: 400 });
    }

    await NewsLetter.create({ email });
    return NextResponse.json({ message: "Email added to subscriptions!" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
