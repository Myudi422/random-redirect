import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

function generateRandomString() {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  const length = Math.floor(Math.random() * 8) + 8
  return Array.from({ length }, () => characters.charAt(Math.floor(Math.random() * characters.length))).join("")
}

export function middleware(request: NextRequest) {
  const currentPath = request.nextUrl.pathname

  // Jika di homepage, redirect ke random path
  if (currentPath === "/") {
    const randomPath = generateRandomString()
    return NextResponse.redirect(new URL(`/${randomPath}`, request.url))
  }

  // Jika sudah di random path, jangan lakukan apa-apa
  // Redirect akan dilakukan oleh client-side script
  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}

