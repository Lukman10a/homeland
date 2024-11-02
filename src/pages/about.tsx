import Image from "next/image";
import React from "react";
import estate from "../../public/assets/estate.png";
import vision from "../../public/assets/vision.png";

export default function About() {
  return (
    <section>
      <div className="flex items-center px-20 gap-6 md:p-8 md:flex-col md:gap-0">
        <div className="space-y-4">
          <h2 className="font-bold text-6xl lg:text-5xl md:text-4xl sm:tet-3xl">
            We are <span className="text-[#1BB832]">Revolutionizing</span> the
            scope of Real Estate in Africa
          </h2>
          <button className="bg-[#27CD40] p-3 px-6 rounded-lg text-white">
            Join us
          </button>
          <p className="bg-[#F5FFF6] text-[#333439] p-4 rounded-lg">
            At Home-Land, we strive to create a win-win environment for all
            parties involved, fostering trust, reliability, and satisfaction.
            Whether you are building, managing, or renting a property, Home-Land
            is your go-to platform for all your real estate needs. Join us on
            our journey to transform the African real estate market.
          </p>
        </div>

        <Image src={estate} alt="estate" className="w-[500px] lg:w-[400px]" />
      </div>

      <div className="flex items-center p-20 gap-10 bg-[#F5FFF6] md:flex-col-reverse">
        <Image src={vision} alt="vision" className="lg:w-[400px]" />
        <div>
          <h2 className="text-7xl font-bold">
            Our <span className="text-[#27CD40]">Vision</span>{" "}
          </h2>
          <p className="font-medium">
            To become the premier real estate application on the continent,
            trusted by both landlords and tenants. We understand the unique
            challenges faced in property construction, property management, and
            tenancy management across Africa.
          </p>
          <h2 className="text-7xl font-bold pt-8">
            Our <span className="text-[#27CD40]">Mission</span>{" "}
          </h2>
          <p className="font-medium">
            To harness cutting-edge technology to eliminate these challenges,
            ensuring a seamless and efficient experience for all users. By
            leveraging advanced solutions, we aim to simplify processes,
            alleviate burdens, and consistently meet the expectations of our
            diverse clientele.
          </p>
        </div>
      </div>
    </section>
  );
}
