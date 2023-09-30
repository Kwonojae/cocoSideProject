import React from "react";
import Button from "./ui/Button";

export default function Mainpage2({ scrollTo }) {
  return (
    <div ref={scrollTo} className="h-full w-full snap-center bg-mainpage">
      <section className="w-1/2 h-full  box-border  float-left">
        <div className="w-full h-full flex flex-col items-center justify-center">
          <div className="flex relative items-center justify-center  w-2/3 h-1/2  ">
            <img
              className="w-80 h-2/3 rounded-[50px] absolute z-30"
              src="/public/images/interior/item16.avif"
              alt=""
            />
            <img
              className="w-48 h-56 rounded-[55px] absolute -top-3 right-48"
              src="/public/images/dessert/item4.avif"
              alt=""
            />
            <img
              className="w-44 h-64 rounded-[48px] absolute bottom-10 right-36"
              src="/public/images/dessert/item22.avif"
              alt=""
            />
            <img
              className="w-52 h-72 rounded-3xl absolute top-40 left-28"
              src="/public/images/dessert/item3.avif"
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="w-1/2 h-full   box-border  float-right font-myfontNanum ">
        <div className="w-full h-full flex flex-col items-center justify-center text-[#c31852] ">
          <h1 className="text-7xl font-bold pb-8 ">트랜드 순위</h1>
          <div className="flex flex-col items-center text-2xl font-medium">
            <p>요즘 트랜드 디저트와 인테리어를 확인해보세요!</p>
            <p>좋아하는 디저트를 잘만드는곳을 찾을수있습니다!</p>
            <p>내 가게에 인테리어를 어떻게 하면 좋을지 참고해보세요!</p>
            <div className="pt-10">
              <button className="rounded-full  w-24 h-12  bg-[#c31852] text-mainpage text-lg font-medium">
                탐색
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
