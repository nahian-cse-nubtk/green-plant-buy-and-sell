import Link from "next/link";
import React from "react";

export default function Banner() {
  return (
    <section
      className="w-full h-[80vh]
      bg-[url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1000&q=60')]
      bg-cover bg-center bg-no-repeat
      flex items-center"
    >
     
      <div className="max-w-xl ml-7   p-8  ">
        <h1 className="text-5xl md:text-6xl font-extrabold text-green-900 drop-shadow-lg">
          Grow More,
          <span className="text-green-700"> Spend Less.</span>
        </h1>

        <p className="text-lg md:text-xl text-green-950 mt-4">
          Discover, buy, and sell beautiful indoor & outdoor plants with ease.
          Manage listings, track sales, and bring nature closer to your home.
        </p>

        <div className="mt-8 flex gap-4">
          <Link
            href="/allProducts"
            className="px-6 py-3 bg-green-700 text-white rounded-lg shadow-lg hover:bg-green-800 transition"
          >
            Explore Plants
          </Link>
        </div>
      </div>
    </section>
  );
}
