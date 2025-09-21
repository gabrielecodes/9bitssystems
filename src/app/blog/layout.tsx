"use server";

import React from "react";

export default async function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="xl:mx-10 mx-2 selection:bg-sky-300 text-foreground flex flex-col items-center">
      {children}
    </section>
  );
}
