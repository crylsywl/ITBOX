const Button = (props) => {
  const { Style, children, Type, OnClick } = props;
  return (
    <button
      type={Type || "button"}
      onClick={OnClick}
      className={`bg-blue-500 text-white py-2 px-4 font-bold rounded hover:bg-blue-600 transition duration-200 cursor-pointer ${Style}`}
    >
      {children}
    </button>
  );
};

export default Button;
