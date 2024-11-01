import Image from "next/image";
import React from "react";
import chat from "../../public/assets/chat.png";
import iPhone from "../../public/assets/iPhone.png";
import googleplay from "../../public/svg/googleplay.svg";
import appstore from "../../public/svg/appstore.svg";
export default function Chat() {
  return (
    <div className="flex flex-col items-center space-y-4">
      <Image src={chat} alt="chat" />
      <h1 className="text-6xl font-bold lg:text-5xl md:text-4xl sm:text-3xl text-center">
        <span className="text-[#27CD40]">Chat</span> with us directly on
        Homeland
      </h1>
      <p className="text-xl font-medium sm:text-lg text-center">
        A great platform to Build, Manage, Rent & lease your properties without
        any commisions.
      </p>
      <div className="flex gap-4">
        <Image src={googleplay} alt={"googleplay"} />
        <Image src={appstore} alt={"appstore"} />
      </div>
      <Image src={iPhone} alt={"iPhone"} />
    </div>
  );
}
