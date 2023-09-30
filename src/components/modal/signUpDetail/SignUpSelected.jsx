import Button from "../../ui/Button";

export default function SignUpSelected({ handleOptionSelect }) {
  return (
    <div className="flex gap-4 pb-3">
      <button
        type="button"
        className={` inline-flex justify-center w-1/2 py-2 bg-gray-200 hover:bg-gray-400 p-2 rounded-md text-sm font-semibold shadow-sm  sm:w-auto`}
        onClick={() => handleOptionSelect("사장님")}
      >
        점주 가입
      </button>
      <button
        type="button"
        className={` inline-flex justify-center w-1/2 py-2 bg-gray-200 hover:bg-gray-400 p-2 rounded-md text-sm font-semibold shadow-sm  sm:w-auto`}
        onClick={() => handleOptionSelect("기본회원")}
      >
        일반 회원
      </button>
    </div>
  );
}
