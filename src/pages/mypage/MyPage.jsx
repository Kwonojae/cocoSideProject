import { Outlet } from "react-router-dom";
import SideBar from "../../components/mypage/SideBar";
import { useState } from "react";
import { BsList } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

export default function MyPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col h-full w-full items-center">
      <div className="flex flex-row h-full w-11/12 ">
        {/* 왼쪽사이드바 시작 */}
        <aside
          className={`vsm:absolute lg:sticky z-10 bg-gray-100 h-full rounded-3xl 2xl:px-2  flex flex-col justify-between items-center transition duration-300 ${
            isSidebarOpen
              ? "vsm:w-[50%] sm:w-[40%] md:w-[35%] lg:ml-0 lg:w-[28%] xl:w-[25%] 2xl:w-[20%] bxl:w-[15%]"
              : " vsm:w-0 sm:w-0 md:w-0 lg:ml-0 lg:w-[28%] xl:w-[30%] 2xl:w-[25%] bxl:w-[15%]"
          } `}
        >
          {!isSidebarOpen ? (
            <button className="text-5xl lg:hidden " onClick={toggleSidebar}>
              <BsList />
            </button>
          ) : (
            <div className="fixed mt-8 text-center lg:hidden">
              <button
                className="absolute -top-5 -right-5 text-4xl lg:hidden"
                onClick={toggleSidebar}
              >
                <AiOutlineClose />
              </button>
              <div className="hidden md:block ">
                <img
                  src="https://tailus.io/sources/blocks/stats-cards/preview/images/second_user.webp"
                  alt=""
                  className=" m-auto rounded-full object-cover md:w-40 md:h-40 lg:w-28 lg:h-28 bxl:w-44 bxl:h-44"
                />
                <h5 className="mt-4 text-3xl font-semibold text-gray-600 md:text-2xl lg:block ">
                  Cynthia J. Watts
                </h5>
              </div>
              <SideBar />
            </div>
          )}
          <div className="mt-8 text-center hidden lg:block">
            <img
              src="https://tailus.io/sources/blocks/stats-cards/preview/images/second_user.webp"
              alt=""
              className=" m-auto rounded-full object-cover md:w-40 md:h-40 lg:w-28 lg:h-28 bxl:w-44 bxl:h-44"
            />
            <h5 className="mt-4 text-3xl font-semibold text-gray-600 md:text-2xl lg:block ">
              Cynthia J. Watts
            </h5>
            <SideBar />
          </div>
        </aside>
        {/* 데시보드 시작 */}
        <section className="flex grow items-center justify-center mb-6 h-full ">
          <Outlet />
        </section>
      </div>
    </div>
  );
}
