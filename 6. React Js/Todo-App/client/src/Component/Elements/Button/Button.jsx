const Button = (props = {}) => {
  const { children, Style, OnClick, Type } = props;
  return (
    <button
      className={`bg-blue-500 text-sm text-white font-bold py-2 px-4 rounded cursor-pointer ${Style}`}
      type={Type || "button"}
      onClick={OnClick}
    >
      {children}
    </button>
  );
};

export default Button;
