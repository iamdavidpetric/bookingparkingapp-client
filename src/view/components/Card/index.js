const Card = (props) => {
  return (
    <div className="max-w-full py-4 px-8 bg-teal-600 shadow-lg rounded-lg my-20 hover:bg-teal-500 transition duration-150">
      <div className="flex justify-start -mt-16">
        <h2 className="text-gray-800 text-4xl font-semibold">{props.title}</h2>
      </div>

      <div className="flex justify-end -mt-16">
        <img
          alt="..."
          className="w-28 h-28 md:w-40 md:h-40 object-cover rounded-full border-2 border-indigo-500"
          src={props.src}
        />
      </div>

      <div>
        <div className="mt-2 text-xl text-white">{props.children}</div>
      </div>
    </div>
  );
};

export default Card;
