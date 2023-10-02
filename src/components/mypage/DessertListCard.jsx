import React from "react";
import { useNavigate } from "react-router-dom";
import { removeDessert } from "../../api/firebase";
import { useMutation, useQueryClient } from "react-query";
import Button from "../ui/Button";

export default function DessertListCard({
  product,
  product: { id, description, image, title, userId },
}) {
  const queryClient = useQueryClient();
  const deleteDessert = useMutation(
    ({ userId, id }) => removeDessert(userId, id),
    {
      onSuccess: () => queryClient.invalidateQueries(["products"]),
    }
  );

  const navigate = useNavigate();
  const handleUpdate = () => {
    console.log(id);
    navigate(`/mypage/cardupdate/${id}`, {
      state: { product },
    });
  };
  const handleDelete = () => {
    console.log("삭제하기");
    deleteDessert.mutate(
      { userId, id },
      {
        onSuccess: () => {
          alert("삭제되었습니다");
        },
      }
    );
  };
  return (
    <>
      <div className="bg-white  shadow-xl mx-3 rounded-3xl flex flex-col justify-around items-center vsm:h-64 vsm:w-full  sm:flex-row sm:h-36 sm:w-full md:w-80 md:h-40 lg:h-44 xl:w-full xl:h-56">
        <img
          className="h-1/2 w-full sm:h-full sm:w-1/2 object-cover rounded-3xl"
          src={image}
          alt={title}
        />

        <div className="flex-1 w-full flex flex-col items-baseline justify-around h-1/2 pl-4 sm:h-full sm:items-baseline sm:w-1/2">
          <div className="flex flex-col justify-start items-baseline">
            <h1 className="text-2xl font-normal mb-0 ">{title}</h1>
          </div>
          <div className="w-full">
            <p className="text-sm text-gray-500">{description}</p>
          </div>
          <div className="w-full flex justify-end items-center gap-4">
            <button
              className="rounded-lg bg-[#e60022] bg-opacity-75 hover:bg-[#e60022] text-white vsm:w-16 vsm:h-10 sm:w-12 sm:h-10 md:w-20 md:h-10 lg:w-40 lg:h-10 xl:h-10 xl:w-16"
              onClick={handleUpdate}
            >
              수정
            </button>
            <button
              onClick={handleDelete}
              className="bg-gray-600 hover:bg-gray-800 vsm:w-16 vsm:h-10 sm:w-12 sm:h-10 md:w-20 md:h-10 lg:w-28 lg:h-10 xl:h-10 xl:w-16  mr-5 text-white  rounded-lg "
            >
              삭제
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
