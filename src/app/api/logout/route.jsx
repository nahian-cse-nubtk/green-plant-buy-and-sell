import { NextResponse } from "next/server";

export async function POST(req) {
  const res = NextResponse.json({ success: true });

  
  res.cookies.set("auth_token", "", {
    httpOnly: true,
    secure: true,
    path: "/",
    maxAge: 0,
  });

  return res;
}
