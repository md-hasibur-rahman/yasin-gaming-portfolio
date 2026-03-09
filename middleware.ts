import { NextRequest, NextResponse } from "next/server";
import { adminAuth, adminDb } from "@/lib/firebase/admin";

export async function middleware(req: NextRequest) {
  const session = req.cookies.get("__session")?.value;
  const path = req.nextUrl.pathname;

  // 1. If no session, redirect to home with auth=required
  if (!session) {
    const url = req.nextUrl.clone();
    url.pathname = "/";
    url.searchParams.set("auth", "required");
    url.searchParams.set("next", path);
    return NextResponse.redirect(url);
  }

  try {
    // 2. Verify the session cookie
    const decodedToken = await adminAuth.verifySessionCookie(session, true);
    const userEmail = (decodedToken.email || "").toLowerCase();
    const MAIN_ADMIN = "animeandmanga1810@gmail.com";

    // 3. Admin Check
    let isUserAdmin = userEmail === MAIN_ADMIN;

    if (!isUserAdmin) {
      const adminDoc = await adminDb.collection("admins").doc(userEmail).get();
      isUserAdmin = adminDoc.exists;
    }

    if (!isUserAdmin) {
      const url = req.nextUrl.clone();
      url.pathname = "/";
      url.searchParams.set("auth", "forbidden");
      return NextResponse.redirect(url);
    }

    return NextResponse.next();
  } catch (error) {
    const url = req.nextUrl.clone();
    url.pathname = "/";
    url.searchParams.set("auth", "error");
    return NextResponse.redirect(url);
  }
}

export const config = {
  matcher: ["/admin/:path*"],
};
