const Progressbar = ({ color, percentage }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
      <div
        className={`${
          color ? color : "bg-red-500"
        } text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full`}
        style={{ width: `${percentage}%` }}
      >
        {percentage}%
      </div>
    </div>
  );
};

export default Progressbar;
