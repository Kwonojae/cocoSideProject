import { useQuery } from "react-query";
import { getCeoProfile } from "../../api/firebase";

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

  return (
    <>
      <div className="flex flex-col  items-center h-full mt-10">
        <div className="relative flex flex-col w-4/5 items-center rounded-[20px]  mx-auto  bg-clip-border  p-3">
          <div className="mt-2 mb-8 w-full">
            <h4 className="px-2 text-xl font-bold text-navy-700 ">Profile</h4>
          </div>
          <div className="grid grid-cols-2 gap-4 px-2 w-full">
            <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 ">
              <p className="text-sm text-gray-600">Company</p>
              <p className="text-base font-medium text-navy-700 ">{company}</p>
            </div>

            <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 ">
              <p className="text-sm text-gray-600">Phone</p>
              <p className="text-base font-medium text-navy-700 ">{phone}</p>
            </div>

            <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 ">
              <p className="text-sm text-gray-600">Website URL</p>
              <p className="text-base font-medium text-navy-700 ">{website}</p>
            </div>

            <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 ">
              <p className="text-sm text-gray-600">Email</p>
              <p className="text-base font-medium text-navy-700 ">{email}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-end w-full pt-36 pr-36">
          <button>수정하기</button>
        </div>
      </div>
    </>
  );
}
