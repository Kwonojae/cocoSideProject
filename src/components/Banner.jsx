export default function Banner() {
  return (
    // vsm:-top-96 md:-top-72 h-sm::-top-1 lg:-top-64  xl:-top-40 2xl:-top-40
    <div className="flex w-full justify-center items-center mb-16 sm:pb-5 lg:mb-1 ">
      <div className="flex flex-col items-center gap-16 vsm:gap-10">
        <div className="text-6xl text-[#e60022] font-bold vsm:text-3xl md:text-4xl laptop2:text-5xl lg:text-5xl xl:text-6xl 2xl:text-6xl">
          디저트와 인테리어의 순위를 확인해보세요!
        </div>
        <div className="flex flex-col items-center text-2xl font-semibold vsm:text-xl md:text-2xl lg:text-2xl">
          <p>디저트와 인테리어의 평점을 주고 사람들과 공유 할 수 있습니다</p>
          <p>다양한 디저트와 인테리어를 확인하고 직접 찾아가보세요! </p>
          <p>나의 가계를 등록하고 홍보할 수 있습니다 </p>
        </div>
      </div>
    </div>
  );
}
