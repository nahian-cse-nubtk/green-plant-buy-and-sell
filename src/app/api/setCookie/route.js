import { NextResponse } from "next/server";

export async function POST(req) {
  const { token } = await req.json();

  const res = NextResponse.json({ success: true });

  res.cookies.set("auth_token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });

  return res;
}
