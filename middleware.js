import { NextResponse } from "next/server";
import { client_url } from "./utils/config";

export default function middleware(req) {
  let verify = req.cookies.get("silverSitting");
  let url = req.url;

  if (!verify && url.includes("/profile")) {
    return NextResponse.redirect(`${client_url}/login`);
  }

  if (!verify && url.includes("/message")) {
    return NextResponse.redirect(`${client_url}/login`);
  }

  if (verify && (url.includes("/register") || url.includes("/login"))) {
    return NextResponse.redirect(`${client_url}/`);
  }


}
