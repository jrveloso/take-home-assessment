const Alert = ({ submitted, setSubmitted, success }) => {
  const message = success ? "successful" : "failed";
  // Event handler to go back to form
  const handleClick = () => setSubmitted(!submitted);

  return (
    <>
      <h1 className="card-title self-center">Submission {message}</h1>
      <button
        onClick={handleClick}
        className="btn md:btn-md lg:btn-lg bg-indigo-700 hover:bg-indigo-800 mt-5"
      >
        Back to form
      </button>
    </>
  );
};

export default Alert;
