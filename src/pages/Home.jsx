import React from "react";
import Mainpage from "../components/Mainpage";
import Banner from "../components/Banner";
import Test from "../components/test";

export default function Home() {
  //  snap-y snap-mandatory
  return (
    <div className="h-full w-full  scrollbar-hide overflow-y-scroll scroll snap-y snap-mandatory">
      <Mainpage />
      <Test />
    </div>
  );
}
