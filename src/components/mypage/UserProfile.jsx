import { useQuery } from "react-query";
import { getCeoProfile } from "../../api/firebase";
import Button from "../ui/Button";

export default function UserProfile() {
  const {
    isLoading,
    error,
    data: userCeo,
  } = useQuery(["userCeo"], getCeoProfile);

  if (isLoading) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>Error: {error.message}</div>;
  }
  // console.log("userCeo여기2: ", userCeo.phone);
  const { company, email, phone, website } = userCeo;

  const handleClick = () => {
    alert("개발중....");
  };

  return (
    <>
      <div className="flex flex-col  h-full w-1/2 pt-40 ">
        <div className="relative flex flex-col w-4/6 h-[350px] rounded-[20px] outline  mx-auto  p-3  ">
          <div className="mt-2 mb-8 w-full">
            <h4 className="px-4 text-xl font-bold ">Profile</h4>
          </div>
          <div className="grid grid-cols-2 gap-4 px-2 w-full items-center">
            <div className="flex flex-col items-start justify-center rounded-2xl bg-white  px-3 py-4  ">
              <p className="text-sm text-gray-600 pb-3">Company</p>
              <p className="text-base font-medium text-[#e60022] ">{company}</p>
            </div>

            <div className="flex flex-col justify-center rounded-2xl bg-white  px-3 py-4  ">
              <p className="text-sm text-gray-600 pb-3">Phone</p>
              <p className="text-base font-medium text-[#e60022] ">{phone}</p>
            </div>

            <div className="flex flex-col items-start justify-center rounded-2xl bg-white  px-3 py-4  ">
              <p className="text-sm text-gray-600 pb-3">Website URL</p>
              <p className="text-base font-medium  text-[#e60022]">{website}</p>
            </div>

            <div className="flex flex-col justify-center rounded-2xl bg-white  px-3 py-4  ">
              <p className="text-sm text-gray-600 pb-3">Email</p>
              <p className="text-base font-medium  text-[#e60022]">{email}</p>
            </div>
            <div className="col-end-3 flex flex-col justify-center items-end pr-16 ">
              <button
                onClick={handleClick}
                className=" w-24 h-10 outline rounded-lg outline-none text-white bg-[#e60022] bg-opacity-75 hover:bg-[#e60022]"
              >
                정보 수정
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
