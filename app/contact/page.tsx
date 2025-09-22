import React from "react";

export default function ContactPage() {
  return (
    <main className="min-h-dvh px-5 py-14">
      <div className="max-w-screen-md mx-auto">
        <h1 className="text-3xl font-semibold">Contact</h1>
        <p className="mt-2 text-white/80">
          Questions about products or fitment? Send us a message.
        </p>

        <form className="mt-8 grid gap-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full rounded-md bg-white/5 ring-1 ring-white/10 px-4 py-3 placeholder-white/50 focus:outline-none focus:ring-[--color-brand-orange]"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full rounded-md bg-white/5 ring-1 ring-white/10 px-4 py-3 placeholder-white/50 focus:outline-none focus:ring-[--color-brand-orange]"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows={5}
            className="w-full rounded-md bg-white/5 ring-1 ring-white/10 px-4 py-3 placeholder-white/50 focus:outline-none focus:ring-[--color-brand-orange]"
          />
          <button
            type="submit"
            className="mt-2 inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-medium text-white bg-[--color-brand-orange] hover:opacity-90 active:opacity-80 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}
