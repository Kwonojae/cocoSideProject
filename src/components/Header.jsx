import { Link } from "react-router-dom";
import { HiMoon, HiSun } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";
import SignUpModal from "./modal/SignUpModal";
import { useContext } from "react";
import { ModalContext } from "../context/ModalContext";
import { LuCat } from "react-icons/lu";
import Navbar from "./Navbar";
import useAuthContext from "../context/AuthContext";

export default function Header() {
  //   const { darkMode, toggleDarkMode } = useDarkMode();
  const {
    open,
    setOpen,
    ClickModal,
    handleClose,
    handleOptionSelect,
    selectedOption,
  } = useContext(ModalContext);
  // const handleState = () => setModalState("회원가입");
  const { user, logout } = useAuthContext();

  return (
    <div className="flex flex-col w-full pt-3 items-center sm:pt-1 md:pt-3 lg:pt-3 xl:pt-3 z-50">
      <header className="flex justify-between w-11/12 ">
        <Link className="flex items-center " to="/">
          <LuCat className="text-[#e60022] text-5xl sm:text-3xl md:text-5xl lg:text-5xl xl:text-6xl" />
          <h1 className="px-4 text-[#e60022] text-4xl font-medium sm:text-3xl sm:px-2 md:text-3xl lg:text-4xl xl:text-5xl">
            Coco
          </h1>
        </Link>
        <nav className="flex items-center gap-4 font-semibold text-2xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-3xl  sm:gap-3">
          <button className="">
            <HiMoon />
            {/* {!darkMode && <HiMoon />} */}
            {/* {darkMode && <HiSun />} */}
          </button>
          {user && (
            <Link className="text-[#e60022]" to="favorititems">
              <AiOutlineHeart />
            </Link>
          )}
          {user && (
            <Link className="font-" to="mypage">
              MyPage
            </Link>
          )}
          {!user && (
            <button className="text-[#e60022]" onClick={ClickModal}>
              LogIn
            </button>
          )}
          {user && (
            <button className="text-[#e60022]" onClick={logout}>
              Logout
            </button>
          )}
          <SignUpModal
            open={open}
            setOpen={setOpen}
            handleClose={handleClose}
            handleOptionSelect={handleOptionSelect}
            selectedOption={selectedOption}
          />
        </nav>
      </header>
      <Navbar />
    </div>
  );
}
