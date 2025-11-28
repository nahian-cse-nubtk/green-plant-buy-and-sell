import { NextResponse } from "next/server";

export function middleware(request) {
  const token = request.cookies.get("auth_token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

   const res = NextResponse.next();
  res.headers.set("Cache-Control", "no-store");
  return res;
}

export const config = {
  matcher: ["/addProduct/:path*","/manageProducts/:path*"],
};
