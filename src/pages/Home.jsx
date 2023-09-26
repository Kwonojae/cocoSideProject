import React from "react";
import Mainpage from "../components/Mainpage";
import Banner from "../components/Banner";

export default function Home() {
  // scrollbar-hide overflow-y-scroll scroll snap-y snap-mandatory
  return (
    <div className="h-screen w-full scrollbar-hide overflow-y-scroll scroll snap-y snap-mandatory">
      <div className=" bg-white snap-end">
        <Mainpage />
      </div>
      <div className=" bg-yellow-200   snap-center">
        <Mainpage />
      </div>
      <div className=" bg-green-200   snap-center">
        <Mainpage />
      </div>
    </div>
  );
}
