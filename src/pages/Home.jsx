import React from "react";
import Mainpage from "../components/Mainpage";
import Mainpage2 from "../components/Mainpage2";

export default function Home() {
  //  snap-y snap-mandatory
  return (
    <div className="h-full w-full  scrollbar-hide overflow-y-scroll scroll snap-y snap-mandatory">
      <Mainpage />
      <Mainpage2 />
    </div>
  );
}
