import React from "react";
import Mainpage from "../components/Mainpage";
import Banner from "../components/Banner";

export default function Home() {
  return (
    <div className="flex-grow-1 h-full pb-4 ">
      <Banner />
      <Mainpage />
    </div>
  );
}
