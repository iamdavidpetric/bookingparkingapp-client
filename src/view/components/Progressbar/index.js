const Progressbar = (props) => {
  return (
    <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
      <div
        className={`${
          props.color ? props.color : "bg-red-500"
        } text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full`}
        style={{ width: `${props.percentage}%` }}
      >
        {props.percentage}%
      </div>
    </div>
  );
};

export default Progressbar;
