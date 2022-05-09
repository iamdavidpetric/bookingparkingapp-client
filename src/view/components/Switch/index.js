const Switch = ({ onChange }) => {
  return (
    <div className="mt-3 mb-3 flex items-start ml-3">
      <div
        onChange={onChange}
        className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in"
      >
        <input
          type="checkbox"
          name="toggle"
          id="toggle"
          className=" toggle-checkbox absolute block w-6 h-6 rounded-full border-purple-600 bg-white border-4 appearance-none cursor-pointer"
        />
        <label
          htmlFor="toggle"
          className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
        ></label>
      </div>
      <label htmlFor="toggle" className=" mt-1 text-xs text-gray-700">
        Your booking history
      </label>
    </div>
  );
};

export default Switch;
