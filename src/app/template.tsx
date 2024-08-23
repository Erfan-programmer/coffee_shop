import Header from "@/components/Header";

import { cookies } from "next/headers";
import React, { ReactNode } from "react";

export default function Template({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const userToken = cookies().get("token");
  return (
    <>
      <Header userToken={userToken} />
      {children}
    </>
  );
}
