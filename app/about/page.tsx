import React from "react";

export default function AboutPage() {
  return (
    <main className="min-h-dvh px-5 py-14">
      <div className="max-w-screen-md mx-auto">
        <h1 className="text-3xl font-semibold">About Us</h1>
        <p className="mt-2 text-white/80">
          We engineer high-performance synthetic motor oils for drivers who
          demand protection, efficiency, and reliability.
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          <div className="rounded-lg p-5 bg-white/5 ring-1 ring-white/10">
            <h3 className="text-base font-semibold">Heritage</h3>
            <p className="mt-2 text-sm text-white/80">
              Built on decades of lubrication science and track-proven results.
            </p>
          </div>
          <div className="rounded-lg p-5 bg-white/5 ring-1 ring-white/10">
            <h3 className="text-base font-semibold">Innovation</h3>
            <p className="mt-2 text-sm text-white/80">
              Advanced additive packages designed for modern engines.
            </p>
          </div>
          <div className="rounded-lg p-5 bg-white/5 ring-1 ring-white/10">
            <h3 className="text-base font-semibold">Sustainability</h3>
            <p className="mt-2 text-sm text-white/80">
              Longer drain intervals help reduce waste oil and maintenance
              trips.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
