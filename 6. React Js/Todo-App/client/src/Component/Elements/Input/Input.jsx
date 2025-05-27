const Input = (props = {}) => {
  const { Label, Type, Placeholder, Name, Style, styleField, OnChange } = props;
  return (
    <>
      <div className={`flex flex-col ${Style}`}>
        <label htmlFor={Label}>{Label}</label>
        <input
          type={Type}
          name={Name}
          placeholder={Placeholder}
          onChange={OnChange}
          className={`p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${styleField}`}
        />
      </div>
    </>
  );
};

export default Input;
