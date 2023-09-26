import "./paginate.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export default function MainPageMasonry({ masonryItems }) {
  return (
    <div className="flex flex-col h-full w-full items-center justify-end pb-10  ">
      <div className="flex justify-end gap-4 ">
        {masonryItems.map((item, index) => (
          <div
            key={index}
            className="rounded-xl w-60 h-[650px] flex flex-col justify-end items-center "
          >
            <img
              className="h-[300px] w-[300px] mt-3  rounded-xl "
              src={item.imageUrl1}
              alt={`Image ${index + 1}`}
            />
            <img
              className="h-[300px] w-[300px] mt-3  rounded-xl "
              src={item.imageUrl2}
              alt={`Image ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
