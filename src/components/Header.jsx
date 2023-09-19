import { Link } from "react-router-dom";
import { HiMoon, HiSun } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";
import Navbar from "./Navbar";
import SignUpModal from "./modal/SignUpModal";
import { useContext } from "react";
import { ModalContext } from "../context/ModalContext";
import { useAuthContext } from "../context/AuthContext";
import Button from "./ui/Button";

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
    <>
      <header className="flex flex-grow-0 justify-between w-full p-2 ">
        <Link className="flex items-center text-4xl" to="/">
          <img className="w-16" src="/images/Logo.png" alt="Coco" />
          <h1 className="px-4">Coco</h1>
        </Link>
        <nav className="flex items-center gap-4 font-semibold text-2xl">
          <button className="">
            <HiMoon />
            {/* {!darkMode && <HiMoon />} */}
            {/* {darkMode && <HiSun />} */}
          </button>
          {user && (
            <Link to="favorititems">
              <AiOutlineHeart />
            </Link>
          )}
          {user && <Link to="mypage">MyPage</Link>}
          {!user && <button onClick={ClickModal}>Sign Up</button>}
          {user && <button onClick={logout}>Logout</button>}
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
    </>
  );
}
