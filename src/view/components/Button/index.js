const Button = ({ className, color, onClick, children, size }) => {
  return (
    <button
      className={`bg-${color}-600 hover:bg-purple-300 text-${color}-600 font-semibold hover:text-white py-2 px-4 border border-${color}-600 hover:border-transparent rounded ${className}`}
      onClick={onClick}
    >
      {children}
      {size}
    </button>
  );
};

export default Button;
