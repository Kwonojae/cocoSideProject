const MAINPAGEIMAGE =
  " h-[300px] w-[300px]  vsm:h-[100px] sm:h-[130px] md:h-[170px] laptop1:h-[150px] laptop2:h-[150px] laptop2:w-[180px] lg:h-[150px] xl:h-[250px]  2xl:h-[260px] 2xl:w-[280px]  mt-3 rounded-xl ";

export default function MainPageMasonry({ masonryItems }) {
  return (
    <div className="flex flex-col h-full w-full items-center justify-end pb-10 vsm:px-1 sm:px-2 md:px-5 lg:px-5 xl:px-5 ">
      <div className="grid  justify-end grid-cols-6 grid-rows-2  gap-4">
        {masonryItems.map((item, index) => (
          <>
            <div
              key={index}
              className="  rounded-xl flex flex-col justify-end items-center"
            >
              <img
                className={MAINPAGEIMAGE}
                src={item.imageUrl1}
                alt={`Image ${index + 1}`}
              />
            </div>
            <div key={index}>
              <img
                className={MAINPAGEIMAGE}
                src={item.imageUrl2}
                alt={`Image ${index + 1}`}
              />
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
