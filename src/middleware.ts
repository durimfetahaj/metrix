import { authMiddleware } from "@kinde-oss/kinde-auth-nextjs/server";

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/customer/:path*",
    "/admin/:path*",
    "/auth-callback",
  ],
};

export default authMiddleware;
