import React from "react";

export default function ProductsPage() {
  return (
    <main className="min-h-dvh px-5 py-14">
      <div className="max-w-screen-md mx-auto">
        <h1 className="text-3xl font-semibold">Products</h1>
        <p className="mt-2 text-white/80">
          Explore our full range of premium synthetic motor oils.
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {["0W-20", "5W-30", "10W-40", "15W-50", "5W-40", "0W-16"].map(
            (grade) => (
              <div
                key={grade}
                className="rounded-xl overflow-hidden ring-1 ring-white/10 bg-white/5"
              >
                <div className="h-24 bg-gradient-to-r from-[--color-brand-blue-dark] to-[--color-brand-orange]" />
                <div className="p-4">
                  <h3 className="text-lg font-medium">{grade} Synthetic</h3>
                  <p className="mt-1 text-sm text-white/80">
                    API SP • ILSAC GF-6
                  </p>
                  <button className="mt-4 w-full rounded-md bg-[--color-brand-orange] hover:opacity-90 active:opacity-80 text-white text-sm py-2">
                    Add to Cart
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </main>
  );
}
