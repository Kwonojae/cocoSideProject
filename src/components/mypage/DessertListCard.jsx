import React from "react";
import { useNavigate } from "react-router-dom";
import { removeDessert } from "../../api/firebase";
import { useMutation, useQueryClient } from "react-query";

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
      <div className="bg-white shadow-md mx-3 rounded-3xl flex flex-col justify-around items-center overflow-hidden sm:flex-row sm:h-52 sm:w-3/5 md:w-96 xl:w-full xl:h-80">
        <img
          className="h-1/2 w-full sm:h-full sm:w-1/2 object-cover"
          src={image}
          alt={title}
        />

        <div className="flex-1 w-full flex flex-col items-baseline justify-around h-1/2 pl-6 sm:h-full sm:items-baseline sm:w-1/2">
          <div className="flex flex-col justify-start items-baseline">
            <h1 className="text-2xl font-normal mb-0 ">{title}</h1>
          </div>
          <div className="w-full">
            <p className="text-sm text-gray-500">{description}</p>
          </div>
          <div className="w-full flex justify-end items-center">
            <button
              onClick={handleDelete}
              className="bg-gray-700 mr-5 text-white px-3 py-1 rounded-sm shadow-md"
            >
              삭제
            </button>
            <button
              onClick={handleUpdate}
              className="bg-gray-700 mr-5 text-white px-3 py-1 rounded-sm shadow-md"
            >
              수정하기
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
