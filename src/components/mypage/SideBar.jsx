import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { FaListUl } from "react-icons/fa";
import { BsPlus } from "react-icons/bs";

const MYPAGMENULIST =
  "px-4 py-3 flex items-center space-x-4 transition ease-linear  hover:scale-110 duration-300   hover:text-sky-400 hover:font-bold ";
export default function SideBar() {
  return (
    <>
      <ul className="space-y-2 tracking-wide mt-10 font-bold text-xl md:pr-4 lg:pr-10 xl:pr-8 2xl:pr-8 bxl:pr-16">
        <li>
          <Link to="/mypage" aria-label="dashboard" className={MYPAGMENULIST}>
            <CgProfile className="text-red-300" />
            <span>Profile</span>
          </Link>
        </li>
        <li>
          <Link to="adddessert" className={MYPAGMENULIST}>
            <BsPlus className="text-blue-500" />
            <span className="group-hover:text-gray-700">New Dessert</span>
          </Link>
        </li>
        <li>
          <Link to="dessertlist" className={MYPAGMENULIST}>
            <FaListUl className="text-green-600" />
            <span className="group-hover:text-gray-700">Dessert List</span>
          </Link>
        </li>
      </ul>
    </>
  );
}
