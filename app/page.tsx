import Image from "next/image";
import React from "react";

export default function Page() {
  return (
    <main className="min-h-dvh flex flex-col">
      {/* Hero */}
      <section className="px-5 py-16 sm:py-20 bg-gradient-to-b from-[--color-brand-blue-dark] to-[--color-brand-orange] text-white">
        <div className="max-w-screen-md mx-auto text-center">
          <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Premium Motor Oil
          </h1>
          <p className="mt-3 text-base/7 text-white/80 sm:text-lg/8">
            Protect your engine with advanced additives engineered for extreme
            performance.
          </p>
          <div className="mt-6 flex gap-3 justify-center">
            <a
              href="#shop"
              className="inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-medium text-white bg-[--color-brand-orange] hover:opacity-90 active:opacity-80 transition"
            >
              Shop Now
            </a>
            <a
              href="#learn"
              className="inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-medium text-white ring-1 ring-white/30 hover:bg-white/10 active:bg-white/15 transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="learn" className="px-5 py-12 sm:py-16 bg-black/30">
        <div className="max-w-screen-md mx-auto grid gap-6 sm:grid-cols-3">
          <div className="rounded-lg p-5 bg-white/5 ring-1 ring-white/10">
            <h3 className="text-base font-semibold">
              High Temperature Stability
            </h3>
            <p className="mt-2 text-sm text-white/80">
              Resists breakdown to protect vital components during heavy loads.
            </p>
          </div>
          <div className="rounded-lg p-5 bg-white/5 ring-1 ring-white/10">
            <h3 className="text-base font-semibold">Cold Start Protection</h3>
            <p className="mt-2 text-sm text-white/80">
              Flows quickly at low temps to reduce wear at ignition.
            </p>
          </div>
          <div className="rounded-lg p-5 bg-white/5 ring-1 ring-white/10">
            <h3 className="text-base font-semibold">
              Extended Drain Intervals
            </h3>
            <p className="mt-2 text-sm text-white/80">
              Advanced detergents keep engines cleaner for longer.
            </p>
          </div>
        </div>
      </section>

      {/* Product Highlights */}
      <section id="shop" className="px-5 py-12 sm:py-16">
        <div className="max-w-screen-md mx-auto">
          <h2 className="text-2xl font-semibold">Popular Grades</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            {["0W-20", "5W-30", "10W-40"].map((grade) => (
              <div
                key={grade}
                className="rounded-xl overflow-hidden ring-1 ring-white/10 bg-white/5"
              >
                <div className="p-4">
                  <Image
                    src={`/oil.png`}
                    alt={grade}
                    width={100}
                    height={100}
                    className="w-full object-cover"
                  />
                  <h3 className="text-lg font-medium">{grade} Synthetic</h3>
                  <p className="mt-1 text-sm text-white/80">
                    API SP • ILSAC GF-6
                  </p>
                  <button className="mt-4 w-full rounded-md bg-white/10 hover:bg-white/15 active:bg-white/20 text-white text-sm py-2">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-14 bg-gradient-to-r from-[--color-brand-blue-dark] via-[--color-brand-blue-dark] to-[--color-brand-orange]">
        <div className="max-w-screen-md mx-auto text-center">
          <h2 className="text-2xl font-semibold">
            Ready for your next oil change?
          </h2>
          <p className="mt-2 text-white/80">
            Find the right oil for your vehicle in minutes.
          </p>
          <a
            href="#shop"
            className="mt-6 inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-medium text-white bg-[--color-brand-orange] hover:opacity-90 active:opacity-80 transition"
          >
            Get Started
          </a>
        </div>
      </section>

      <footer className="px-5 py-8 text-center text-white/60 text-sm">
        © {new Date().getFullYear()} Motor Oil Co. All rights reserved.
      </footer>
    </main>
  );
}
