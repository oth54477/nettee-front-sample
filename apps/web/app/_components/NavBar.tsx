"use client";

import { redirect } from "next/navigation";
import { ROUTES } from "@/lib/constants/routes";

export default function NavBar() {
  return (
    <nav className="bg-black mb-8 p-4">
      <h1
        className="text-3xl font-bold text-white cursor-pointer"
        onClick={() => redirect(ROUTES.home())}
      >
        Blog
      </h1>
    </nav>
  );
}
