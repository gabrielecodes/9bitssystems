"use client";

import { useActionState } from "react";
import { submitContactForm } from "../actions/sendEmail";
import SendPlane from "./icons/sendplane";

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContactForm, null);

  return (
    <div className="mx-auto xl:px-8 py-4">
      <form action={formAction} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground">
            Your Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 ring-0 outline-none"
          />
          {state?.error ? <p className="text-red-500 text-sm mt-1">{state.error}</p> : <></>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground">
            Your Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 ring-0 outline-none"
          />
          {state?.error ? <p className="text-red-500 text-sm mt-1">{state.error}</p> : <></>}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-foreground">
            Your Message:
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="resize-none h-56 mt-1 block w-full border border-gray-300 rounded-md p-2 ring-0 outline-none"
          ></textarea>
          {state?.error ? <p className="text-rose-500 text-sm mt-1">{state.error}</p> : <></>}
        </div>

        <button
          disabled={pending}
          type="submit"
          className="w-32 px-2 py-1 border border-background relative flex transition-all duration-200 ease-in-out hover:bg-foreground hover:text-background hover:w-38 hover:pl-8 cursor-pointer bg-blue-neon text-background rounded-md overflow-clip group"
        >
          <SendPlane className="size-6 absolute -left-8 transition-all duration-200 ease-in-out group-hover:left-1" />
          <span className="inline-block ">Send Message</span>
        </button>

        {state?.success && <p className="text-green-600 mt-4">{state.success}</p>}
        {state?.success === false && !state?.error && <p className="text-rose-500 mt-4">{state.error}</p>}
      </form>
    </div>
  );
}
