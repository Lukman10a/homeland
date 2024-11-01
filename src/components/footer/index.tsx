import React from "react";
import ButtomFooter from "./buttomFooter";
import TopFooter from "./topFooter";
import NewsLetter from "../newsLetter";
import Chat from "../chat";

export default function Footer() {
  return (
    <div>
      <Chat />
      <NewsLetter />
      <TopFooter />
      <ButtomFooter />
    </div>
  );
}
