import { Outlet } from "react-router-dom";
import SideBar from "../../components/mypage/SideBar";

export default function MyPage() {
  return (
    <div className="flex h-full w-full ">
      {/* 왼쪽사이드바 시작 */}
      <aside className="relative left-20  pb-3 px-6 w-full flex flex-col justify-between border-r transition duration-300 md:w-4/12 lg:ml-0 lg:w-[18%] xl:w-[15%] 2xl:w-[16%]">
        {/* 유저이미지 */}
        <div className="mt-8 text-center ">
          <img
            src="https://tailus.io/sources/blocks/stats-cards/preview/images/second_user.webp"
            alt=""
            className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
          />
          <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block ">
            Cynthia J. Watts
          </h5>
          <SideBar />
        </div>
      </aside>

      {/* 데시보드 시작 */}
      <section className="flex items-center justify-center mb-6 h-full lg:w-[75%] xl:w-[100%] 2xl:w-[100%]">
        <Outlet />
      </section>
    </div>
  );
}
