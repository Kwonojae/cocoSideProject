import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import MainPageMasonry from "./MainPageMasonry";
import Banner from "./Banner";
import { SlArrowDown } from "react-icons/sl";

export default function Mainpage({ scrollToMove }) {
  const totalItems = [
    <MainPageMasonry masonryItems={dessert1} />,
    <MainPageMasonry masonryItems={dessert2} />,
    <MainPageMasonry masonryItems={interior1} />,
    <MainPageMasonry masonryItems={interior2} />,
  ];
  const [currentPage, setCurrentPage] = useState(0); // 현재 페이지 상태
  const itemsPerPage = 1; // 페이지당 표시할 아이템 수
  //ceil  반올림
  const pageCount = Math.ceil(totalItems.length / itemsPerPage); // 전체 페이지 수 계산
  // 현재 페이지의 아이템 범위 계산
  //min가장 작은수 찾아서 할당
  const startIndex = currentPage * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems.length);
  const currentItems = totalItems.slice(startIndex, endIndex);
  const [scroll, setScroll] = useState(0);
  // 페이지 변경 이벤트 핸들러
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };
  // 5초마다 다음 페이지로 이동하는 함수
  const autoNextPage = () => {
    const nextPage = (currentPage + 1) % pageCount; // 다음 페이지
    setCurrentPage(nextPage);
  };

  const scrollTo = () => {
    const scrollAmount = window.document.documentElement.clientHeight; // 스크롤 양
    console.log(`높이: ${scrollAmount}`);
    window.scrollBy(0, scrollAmount);
  };

  useEffect(() => {
    // 5초마다 autoNextPage 함수 실행
    const intervalId = setInterval(autoNextPage, 5000);
    return () => {
      // 컴포넌트 언마운트 시 interval 제거
      clearInterval(intervalId);
    };
  }, [currentPage, pageCount]);

  return (
    <div className="flex flex-col items-center justify-end h-full snap-center">
      <Banner />
      <ReactPaginate
        className=""
        breakLabel=""
        previousLabel=""
        nextLabel=""
        pageCount={pageCount}
        forcePage={currentPage}
        onPageChange={handlePageClick}
        containerClassName={"flex justify-center space-x-2 "}
        activeClassName={"text-[#e60022] "}
      />
      <div className="flex flex-col">
        {currentItems.map((item, index) => (
          <div className="" key={index}>
            {item}
          </div>
        ))}
      </div>
      <button
        onClick={scrollToMove}
        className="rounded-full animate-bounce w-14 h-14 flex items-center text-center text-3xl  justify-center  text-white bg-[#e60022]  bg-opacity-70  "
      >
        <SlArrowDown />
      </button>
    </div>
  );
}
//이미지
const dessert1 = [
  {
    imageUrl1: "/images/dessert/item1.avif",
    imageUrl2: "/images/dessert/item2.avif",
  },
  {
    imageUrl1: "/images/dessert/item3.avif",
    imageUrl2: "/images/dessert/item4.avif",
  },
  {
    imageUrl1: "/images/dessert/item5.avif",
    imageUrl2: "/images/dessert/item6.avif",
  },
  {
    imageUrl1: "/images/dessert/item7.avif",
    imageUrl2: "/images/dessert/item8.avif",
  },
  {
    imageUrl1: "/images/dessert/item9.avif",
    imageUrl2: "/images/dessert/item10.avif",
  },
  {
    imageUrl1: "/images/dessert/item11.avif",
    imageUrl2: "/images/dessert/item12.avif",
  },
];
const dessert2 = [
  {
    imageUrl1: "/images/dessert/item13.avif",
    imageUrl2: "/images/dessert/item14.avif",
  },
  {
    imageUrl1: "/images/dessert/item15.avif",
    imageUrl2: "/images/dessert/item16.avif",
  },
  {
    imageUrl1: "/images/dessert/item17.avif",
    imageUrl2: "/images/dessert/item18.avif",
  },
  {
    imageUrl1: "/images/dessert/item19.avif",
    imageUrl2: "/images/dessert/item20.avif",
  },
  {
    imageUrl1: "/images/dessert/item21.avif",
    imageUrl2: "/images/dessert/item22.avif",
  },
  {
    imageUrl1: "/images/dessert/item23.avif",
    imageUrl2: "/images/dessert/item24.avif",
  },
];
const interior1 = [
  {
    imageUrl1: "/images/interior/item1.avif",
    imageUrl2: "/images/interior/item2.avif",
  },
  {
    imageUrl1: "/images/interior/item3.avif",
    imageUrl2: "/images/interior/item4.avif",
  },
  {
    imageUrl1: "/images/interior/item5.avif",
    imageUrl2: "/images/interior/item6.avif",
  },
  {
    imageUrl1: "/images/interior/item7.avif",
    imageUrl2: "/images/interior/item8.avif",
  },
  {
    imageUrl1: "/images/interior/item9.avif",
    imageUrl2: "/images/interior/item10.avif",
  },
  {
    imageUrl1: "/images/interior/item11.avif",
    imageUrl2: "/images/interior/item12.avif",
  },
];
const interior2 = [
  {
    imageUrl1: "/images/interior/item13.avif",
    imageUrl2: "/images/interior/item14.avif",
  },
  {
    imageUrl1: "/images/interior/item15.avif",
    imageUrl2: "/images/interior/item16.avif",
  },
  {
    imageUrl1: "/images/interior/item17.avif",
    imageUrl2: "/images/interior/item18.avif",
  },
  {
    imageUrl1: "/images/interior/item19.avif",
    imageUrl2: "/images/interior/item20.avif",
  },
  {
    imageUrl1: "/images/interior/item21.avif",
    imageUrl2: "/images/interior/item22.avif",
  },
  {
    imageUrl1: "/images/interior/item23.avif",
    imageUrl2: "/images/interior/item24.avif",
  },
];
