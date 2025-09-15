// app/contact/page.tsx
"use client";

import { useActionState } from "react";
import { submitContactForm } from "../actions/sendEmail";

// This is an example of a "client component"
export default function ContactForm() {
    const [state, formAction, pending] = useActionState(submitContactForm, null);

    return (
        <div className="container mx-auto p-8">
            <form action={formAction} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground">Yout Name:</label>
                    <input type="text" id="name" name="name" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                    {state?.error ? <p className="text-red-500 text-sm mt-1">{state.error}</p> : <></>}
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground">Your Email:</label>
                    <input type="email" id="email" name="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                    {state?.error ? <p className="text-red-500 text-sm mt-1">{state.error}</p> : <></>}
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground">Your Message:</label>
                    <textarea id="message" name="message" rows={4} className="resize-none h-56 mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"></textarea>
                    {state?.error ? <p className="text-red-500 text-sm mt-1">{state.error}</p> : <></>}
                </div>

                <button disabled={pending} type="submit" className="mx-2 px-2 py-1 inline-block -skew-x-12 border border-foreground hover:bg-foreground hover:text-background transition-color duration-200 ease-in-out cursor-pointer">
                    <span className="inline-block skew-x-12">&#8627;&ensp;Send Message</span>
                </button>

                {state?.success && <p className="text-green-600 mt-4">{state.success}</p>}
                {state?.success === false && !state?.error && <p className="text-red-500 mt-4">{state.error}</p>}
            </form>
        </div>
    );
}
