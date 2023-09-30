export default function InPut({
  onChange,
  label,
  id,
  value,
  type,
  placeholder,
  autocomplete,
  accept,
  required = false,
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900 pt-3 "
      >
        {label}
      </label>
      <input
        onChange={onChange}
        type={type}
        id={id}
        value={value}
        className={`${
          type === "file"
            ? "hidden"
            : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        }`}
        placeholder={placeholder}
        required={required}
        autoComplete={autocomplete}
        accept={accept}
      />
    </div>
  );
}
