const Card = ({ children }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl mt-5 sm:mt-10 mx-5">
      <div className="card-body">{children}</div>
    </div>
  );
};

export default Card;
