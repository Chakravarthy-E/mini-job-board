import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="flex items-center justify-between w-full px-6 py-4 bg-gray-300 shadow-lg font-nunito">
      <h1 className="font-bold text-2xl text-primary font-liter">
        <Link href="/">Mini Job Board</Link>
      </h1>
      <ul className="flex items-center space-x-6">
        <li>
          <Link href="/candidate/jobs">
            <Button className="text-white hover:bg-blue-500 px-4 py-2 rounded-md transition-transform transform hover:scale-105">
              Candidate Dashboard
            </Button>
          </Link>
        </li>
        <li>
          <Link href="/company/jobs">
            <Button className="text-white hover:bg-blue-500 px-4 py-2 rounded-md transition-transform transform hover:scale-105">
              Company Dashboard
            </Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
