import './inputfield.css';
const InputField = ({
  label,
  placeholder,
  type,
  handleChange,
  name,
  value,
}) => {
  return (
    <>
      <label htmlFor={label}>{label}</label>
      <input
        name={name}
        className="input-form"
        placeholder={placeholder}
        type={type}
        onChange={handleChange}
        value={value}
      />
    </>
  );
};

export default InputField;
