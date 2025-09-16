"use server"

import React from 'react';

export default async function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="xl:mx-0 mx-4 xl:grid xl:grid-cols-8">
      <div></div>
      <div className="border-r border-neutral-200"></div>
      <div className="col-start-3 col-span-4">
        {children}
      </div>
      <div className="border-l border-neutral-200"></div>
      <div></div>
      <div></div>
    </section>
  )
}
