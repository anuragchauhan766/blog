import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import ThemeSwitch from "./themeSwitch";

function Navbar() {
  return (
    <nav className="w-full flex items-center justify-center">
      <div className="w-full flex items-center justify-between max-w-4xl">
        <div className="font-extrabold text-3xl">
          <Link href="/">
            <span>Blog</span>
          </Link>
        </div>
        <div className="flex items-center justify-center gap-3">
          <Button className="bg-purple hover:bg-purple-light dark:bg-purple dark:text-white dark:hover:bg-purple-light">
            Sign up
          </Button>
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
