import { NextResponse } from "next/server";
export function middleware(request) {
  console.log("********* middleware is working **********");
  const usertoken = request.cookies.get("next-auth.session-token");
  console.log("pathname  : ", request.nextUrl.pathname);

  const cannotaccesspathiflogin = request.nextUrl.pathname === "/";
  const cannotaccesspathiflogin1 = request.nextUrl.pathname === "/signin";
  const cannotaccesspathiflogin2 = request.nextUrl.pathname === "/register";

  if (
    (usertoken && cannotaccesspathiflogin) ||
    cannotaccesspathiflogin1 ||
    cannotaccesspathiflogin2
  ) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }
}
export const config = {
  matcher: ["/api", "/dashboard/:path*", "/test", "/"],
};
