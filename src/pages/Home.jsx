import React from "react";
import Mainpage from "../components/Mainpage";
import Banner from "../components/Banner";

export default function Home() {
  return (
    <section className="flex-grow pb-4">
      <Banner />
      <Mainpage />
    </section>
  );
}
