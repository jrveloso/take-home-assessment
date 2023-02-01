const Button = ({ text }) => {
  return (
    <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-indigo-700 hover:bg-indigo-800">
      {text}
    </button>
  );
};

export default Button;
