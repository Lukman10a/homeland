import React from "react";
import herobg from "../../public/assets/herobg.png";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex items-center">
      <div className="space-y-4">
        <h1>
          <span className="text-[#000929] text-5xl font-bold block">
            Build, Manage Rent,
          </span>
          <span className="text-[#000929] text-5xl font-bold block">
            & Lease your
          </span>
          <span className="text-[#27CD40] text-5xl font-bold block">
            Properties
          </span>
        </h1>
        <p>
          A great platform to Build, Manage, Rent & lease your properties
          without any commisions.
        </p>
      </div>
      <div>
        <Image src={herobg} alt="Hero background" className=" object-fill" />
      </div>
    </div>
  );
}
