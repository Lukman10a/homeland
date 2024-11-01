import Image from "next/image";
import React from "react";
import chat from "../../public/assets/chat.png";
import iPhone from "../../public/assets/iPhone.png";
import googleplay from "../../public/svg/googleplay.svg";
import appstore from "../../public/svg/appstore.svg";
export default function Chat() {
  return (
    <div className="flex flex-col items-center space-y-4">
      <Image src={chat} alt="chat" className="md:w-52 sm:w-24" />
      <h1 className="text-6xl font-bold lg:text-5xl md:text-4xl sm:text-3xl text-center">
        <span className="text-[#27CD40]">Chat</span> with us directly on
        Homeland
      </h1>
      <p className="text-xl font-medium sm:text-lg text-center sm:px-4">
        A great platform to Build, Manage, Rent & lease your properties without
        any commisions.
      </p>
      <div className="flex gap-4 ">
        <Image
          src={googleplay}
          alt={"googleplay"}
          className="md:w-52 sm:w-24"
        />
        <Image src={appstore} alt={"appstore"} className="lg:w-52 sm:w-24" />
      </div>
      <Image src={iPhone} alt={"iPhone"} className="lg:w-2/3" />
    </div>
  );
}
