export default function Button({ type, text, onClick }) {
  return (
    <button
      type={type}
      className="mt-3 inline-flex items-center w-full h-10 justify-center rounded-md bg-pink-200 px-3 py-2 text-sm font-semibold text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-pink-300 sm:mt-0 sm:w-auto"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
