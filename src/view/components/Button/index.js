const Button = (props) => {
  return (
    <button
      className={`bg-${props.color}-600 hover:bg-purple-300 text-${props.color}-600 font-semibold hover:text-white py-2 px-4 border border-${props.color}-600 hover:border-transparent rounded ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
      {props.size}
    </button>
  );
};

export default Button;
