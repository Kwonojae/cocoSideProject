import React, { useRef } from "react";
import Mainpage from "../components/Mainpage";
import Mainpage2 from "../components/Mainpage2";

export default function Home() {
  //  snap-y snap-mandatory
  const scrollTo = useRef(); // DOm가리키기
  const scrollToMove = () => {
    scrollTo.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <div className="h-full w-full  scrollbar-hide overflow-y-scroll scroll snap-y snap-mandatory">
      <Mainpage scrollToMove={scrollToMove} />
      <Mainpage2 scrollTo={scrollTo} />
    </div>
  );
}
