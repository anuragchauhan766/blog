import Link from "next/link";
import React from "react";

import ThemeSwitch from "./themeSwitch";
import SignUp from "./SignUp";
import { auth } from "@/lib/auth";

import UserNav from "./UserNav";
import WriteBlogButton from "./WriteBlogButton";

async function Navbar() {
  const session = await auth();

  return (
    <nav className="w-full flex items-center justify-center border-b-[0.5px] border-b-violet-400/40 p-2 dark:border-b-gray-800">
      <div className="w-full flex items-center justify-between max-w-2xl">
        <div className="font-extrabold text-lg xs:text-3xl">
          <Link href="/">
            <span>Blog</span>
          </Link>
        </div>
        <div className="flex items-center justify-center gap-3">
          <div>
            <Link
              href="/feed"
              className="p-2 font-semibold text-sm hover:text-gray-700"
            >
              My Feed
            </Link>
          </div>
          {session !== null ? <WriteBlogButton /> : null}

          {session === null ? <SignUp /> : <UserNav />}

          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
