const Card = (props) => {
  return (
    <a href={props.href}>
      <div className="max-w-full py-4 px-8 bg-teal-600 shadow-lg rounded-lg my-20 hover:bg-teal-500 transition duration-150">
        <div className="flex justify-center md:justify-start -mt-16">
          <h2 className="text-gray-800 text-4xl font-semibold">
            {props.title}
          </h2>
        </div>

        <div className="flex justify-center md:justify-end -mt-16">
          <img
            className="w-40 h-40 object-cover rounded-full border-2 border-indigo-500"
            src={props.src}
          />
        </div>

        <div>
          <div className="mt-2 text-xl text-white">{props.children}</div>
        </div>
      </div>
    </a>
  );
};

export default Card;
