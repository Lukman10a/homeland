import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { SlSocialInstagram } from "react-icons/sl";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function ButtomFooter() {
  return (
    <footer className="flex justify-between items-center sm:flex-col sm:gap-8 border-t-2 border-[#E8E6F9] p-8 px-20 text-[#000929]">
      <p>©2024 Homeland. All rights reserved</p>
      <div className="flex gap-8">
        <FaFacebookF />
        <SlSocialInstagram />
        <FaTwitter />
        <FaLinkedin />
      </div>
    </footer>
  );
}
