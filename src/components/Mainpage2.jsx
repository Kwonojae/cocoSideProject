import React from "react";
import Button from "./ui/Button";

export default function Mainpage2({ scrollTo }) {
  return (
    <div
      ref={scrollTo}
      className="h-full w-full  bg-mainpage sm:flex-col sm:flex sm:items-center vsm:flex-col vsm:flex vsm:items-center lg:flex-row "
    >
      <section className="w-1/2 h-full  font-myfontNanum sm:w-full vsm:w-full ">
        <div className="w-full h-full flex flex-col items-center justify-center text-[#c31852] ">
          <h1 className="text-7xl font-bold pb-8 ">트랜드 순위</h1>
          <div className="flex flex-col items-center text-2xl font-medium vsm:text-xl md:text-2xl lg:">
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
      <section className="w-1/2 h-full sm:w-full sm:h-full vsm:w-full vsm:h-full ">
        <div className="w-full h-full flex flex-col items-center justify-center">
          <div className="flex relative items-center justify-center  w-2/3 h-1/2 sm:w-full vsm:h-full sm:h-full lg:h-1/2">
            <img
              className="w-80 h-2/3 rounded-[50px] absolute z-30"
              src="/images/interior/item16.avif"
              alt=""
            />
            <img
              className="w-48 h-56 rounded-[55px] absolute -top-3  right-48 vsm:-right-[65px] sm:right-[75px] md:right-[125px] lg:right-[15px] ssxl:right-[260px] xl:right-[75px] 2xl:right-[140px] bxl:-top-10 sxl:right-[250px] mxl:right-[310px] bxl:right-96"
              src="/images/dessert/item4.avif"
              alt=""
            />
            <img
              className="w-44 h-64 rounded-[48px] absolute bottom-1 right-44 vsm:-right-[65px] sm:right-[50px] md:right-[110px] lg:right-[15px] ssxl:right-[240px] xl:right-[55px] 2xl:right-[120px] sxl:right-[240px] mxl:right-[290px] bxl:right-[370px]"
              src="/images/dessert/item22.avif"
              alt=""
            />
            <img
              className="w-52 h-72 rounded-3xl absolute top-40 left-28 vsm:-left-[100px] sm:left-[12px] md:left-[75px] lg:-left-[15px] ssxl:left-[200px] xl:left-[7px] 2xl:left-[70px] sxl:left-[190px] mxl:left-[250px] bxl:left-[330px]"
              src="/images/dessert/item3.avif"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
}
