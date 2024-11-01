import Image from "next/image";
import React from "react";
import logo from "../../../public/svg/logo.svg";
import Link from "next/link";

const Footer: React.FC = () => {
  const links = {
    services: [
      "Buy Properties",
      "Build Properties",
      "Enlist Properties",
      "List Properties",
    ],
    company: ["About us", "Blog", "FAQ"],
    legal: ["Terms & Conditions", "Privacy Policy", "Security"],
  };

  return (
    <footer>
      <div className=" flex justify-center gap-40 p-8 lg:gap-20 md:justify-start md:flex-col">
        <div className="space-y-4 ">
          <Image src={logo} alt="Homeland Logo" width={100} height={100} />
          <p className="text-gray-500 text-sm">
            <span className="block">A great platform to Build,</span>
            <span className="block">Manage, Rent & lease your</span>
            <span className="block">properties without any commissions.</span>
          </p>
        </div>

        <div className="grid grid-cols-3 gap-20 md:grid-cols-2">
          {Object.entries(links).map(([title, items]) => (
            <div key={title} className="space-y-4">
              <h3 className="text-gray-900 font-bold ">
                {title.toUpperCase()}
              </h3>
              <ul className="space-y-2 text-gray-500 text-sm">
                {items.map((item) => (
                  <li key={item}>
                    <Link href="#" className="hover:text-gray-700">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
