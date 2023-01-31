const TextInput = ({ name, placeholder, value, onChange, createLabel }) => {
  // Set input type
  const checkInputType = (type) => {
    switch (type) {
      case "name":
        return "text";
      case "email":
        return "email";
      case "password":
        return "password";
    }
  };

  const label = createLabel(name)

  return (
    <div className="form-control w-full max-w-xs">
      <label className="label control-label">
        <span className="label-text">{label}</span>
      </label>
      <input
        required
        name={name}
        value={value}
        placeholder={placeholder}
        type={checkInputType(name)}
        onChange={onChange}
        className="input input-bordered w-full max-w-xs"
      />
    </div>
  );
};

export default TextInput;
