"use server";

import React from "react";
import { Border } from "../components/border";

export default async function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="xl:mx-0 mx-4 flex xl:grid xl:grid-cols-8 selection:bg-sky-300 bg-[url('/bg3.jpg')]">
      <div className="xl:w-full w-0">
        <div className="w-full h-40"></div>
        <div className="w-full h-40 border-t border-border"></div>
        <div className="w-full h-full border-t border-border"></div>
      </div>
      <div className="xl:w-full w-0 border-r border-border">
        <div className="w-full h-40"></div>
        <div className="w-full h-40 border-t border-border"></div>
        <div className="w-full h-full border-t border-border"></div>
      </div>
      <div className="mx-auto xl:mx-0 col-start-3 col-span-4">{children}</div>
      <div className="xl:w-full w-0 border-l border-border">
        <div className="w-full h-40"></div>
        <div className="w-full h-40 border-t border-border"></div>
        <div className="w-full h-full border-t border-border"></div>
      </div>
      <div className="xl:w-full w-0">
        <div className="w-full h-40"></div>
        <div className="w-full h-40 border-t border-border"></div>
        <div className="w-full h-full border-t border-border"></div>
      </div>
      <Border />
      <div className="col-span-8 border-t border-border"></div>
    </section>
  );
}
