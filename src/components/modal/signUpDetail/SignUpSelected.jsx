export default function SignUpSelected({ selectedOption, handleOptionSelect }) {
  return (
    <div>
      <button
        type="button"
        className={`${
          selectedOption === "사장님"
            ? "bg-red-600 text-white"
            : "bg-white text-gray-900"
        } inline-flex justify-center w-1/2 py-2 rounded-md text-sm font-semibold shadow-sm hover:bg-red-500 sm:w-auto`}
        onClick={() => handleOptionSelect("사장님")}
      >
        점주 가입
      </button>
      <button
        type="button"
        className={`${
          selectedOption === "기본회원"
            ? "bg-red-600 text-white"
            : "bg-white text-gray-900"
        } inline-flex justify-center w-1/2 py-2 rounded-md text-sm font-semibold shadow-sm hover:bg-red-500 sm:w-auto`}
        onClick={() => handleOptionSelect("기본회원")}
      >
        기본 회원 가입
      </button>
    </div>
  );
}
