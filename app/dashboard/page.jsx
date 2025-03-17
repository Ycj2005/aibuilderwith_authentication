'use client'
import React from "react";
import { SidebarDemo } from "../compo/mysidebar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
export default function page() {
  const session = useSession();
  const router = useRouter();
  if (session.status === "unauthenticated") {
    router.push("/");
  }
  return <SidebarDemo />;
}
