import React from "react";

export default function NewsLetter() {
  return (
    <div className="flex flex-col text-center gap-20 p-28">
      <div className="space-y-4">
        <h1 className="text-[#000929] font-bold text-4xl">
          Subscribe to our Newsletter
        </h1>
        <p className="text-base text-[#000929]">
          Discover ways to increase your home&apos;s value and get listed. No
          Spam.
        </p>
      </div>
      <div className="space-y-4">
        <div className="flex items-center justify-center bg-[#F5FFF6] p-4 rounded-md max-w-lg mx-auto shadow-sm">
          <input
            type="email"
            placeholder="Enter your email address"
            className="p-3 rounded-l-md w-full focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <button className="bg-[#27CD40] text-white px-10 py-3 rounded-md hover:bg-green-600">
            Submit
          </button>
        </div>
        <p className="font-medium">
          Join <span className="text-[#27CD40]">10,000+</span> other landlords
          in our estatery community.
        </p>
      </div>
    </div>
  );
}
