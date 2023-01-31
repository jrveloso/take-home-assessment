const SelectInput = ({ name, value, options, onChange, createLabel }) => {
  const label = createLabel(name);

  return (
    <div className="form-control w-full max-w-xs">
      <label className="label control-label">
        <span className="label-text">{label}</span>
      </label>
      <select
        required
        name={name}
        value={value}
        onChange={onChange}
        className="select select-bordered"
      >
        <option selected disabled value={""}>
          Select...
        </option>
        {options.map((option, i) => {
          const selection = option.name ?? option;
          return (
            <option value={selection} key={i}>
              {selection}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectInput;
