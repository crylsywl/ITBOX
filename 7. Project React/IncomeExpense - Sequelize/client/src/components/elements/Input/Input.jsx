const Input = (props) => {
  const {
    Name,
    Type,
    StyleField,
    Placeholder,
    OnChange,
    Title,
    StyleLabel,
    Style,
    Value,
  } = props;

  return (
    <div className={`flex flex-col ${Style}`}>
      <label htmlFor={Name} className={StyleLabel}>
        {Title}
      </label>
      <input
        name={Name}
        type={Type}
        className={StyleField}
        onChange={OnChange}
        placeholder={Placeholder}
        value={Value}
      />
    </div>
  );
};

export default Input;
