"use client";
import Link from "next/link";
import React from "react";

type Props = {
  children: React.ReactNode;
  to: string;
};

export default function EventRoute({ children, to }: Readonly<Props>) {
  return (
    <Link
      href={to}
      className="transition-all duration-200 ease-in-out hover:scale-[1.01]"
    >
      {children}
    </Link>
  );
}
