"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <div className=" flex p-6 sticky top-0 z-10 bg-white saturate-200 backdrop-blur-md border-b justify-between">
      <div>The Modelling Club</div>
      <nav>
        <ul className=" flex gap-4">
          <li className=" hover:text-secondary hover:underline">
            <Link href={"/articles"}>Articles</Link>
          </li>
          <li className=" hover:text-secondary hover:underline">
            <Link href={"/"}>Events</Link>
          </li>
          <li className=" hover:text-secondary hover:underline">
            <Link href={"/projects"}>Projects</Link>
          </li>
          <li className=" hover:text-secondary hover:underline">
            <Link href={"/team"}>About Us</Link>
          </li>
        </ul>
      </nav>
      {/* <div>
              <Button variant={"ghost"}>Sign Up</Button>
            </div> */}
    </div>
  );
}
