import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <>
      <ul className="space-y-2 tracking-wide mt-8 ">
        <li>
          <Link
            to="/mypage"
            aria-label="dashboard"
            className=" px-4 py-3 flex items-center space-x-4 transition ease-linear  hover:scale-110 duration-300   hover:text-sky-300 hover:font-bold "
          >
            <span className="-mr-1 ">profile</span>
          </Link>
        </li>
        <li>
          <Link
            to="adddessert"
            className="px-4 py-3 flex items-center space-x-4 transition ease-linear  hover:scale-110 duration-300   hover:text-sky-300 hover:font-bold "
          >
            <span className="group-hover:text-gray-700">디저트 추가</span>
          </Link>
        </li>
        <li>
          <Link
            to="dessertlist"
            className="px-4 py-3 flex items-center space-x-4 transition ease-linear  hover:scale-110 duration-300   hover:text-sky-300 hover:font-bold "
          >
            <span className="group-hover:text-gray-700">Dessert List</span>
          </Link>
        </li>
      </ul>
    </>
  );
}
