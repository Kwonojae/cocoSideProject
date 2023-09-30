export default function Button({ type, text, onClick }) {
  return (
    <button
      type={type}
      className="mt-3  inline-flex items-center w-full h-10 justify-center rounded-md  px-3 py-2 text-sm font-semibold  shadow-sm bg-[#e60022] bg-opacity-75 hover:bg-[#e60022] text-white   sm:mt-0 sm:w-auto"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
