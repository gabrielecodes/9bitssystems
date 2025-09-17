"use server";

import React from "react";
import { Border } from "../components/border";

export default async function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="xl:mx-0 mx-4 xl:grid xl:grid-cols-8 selection:bg-sky-400">
      <div>
        <div className="w-full h-40 border-b border-border"></div>
        <div className="w-full h-40 border-b border-border"></div>
      </div>
      <div className="border-r border-neutral-200">
        <div className="w-full h-40 border-b border-border"></div>
        <div className="w-full h-40 border-b border-border"></div>
      </div>
      <div className="col-start-3 col-span-4">{children}</div>
      <div className="border-l border-neutral-200">
        <div className="w-full h-40 border-b border-border"></div>
        <div className="w-full h-40 border-b border-border"></div>
      </div>
      <div>
        <div className="w-full h-40 border-b border-border"></div>
        <div className="w-full h-40 border-b border-border"></div>
      </div>
      <div></div>
      <Border />
      <div className="col-span-8 border-t border-border"></div>
    </section>
  );
}
