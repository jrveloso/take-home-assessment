import React, { useEffect, useState } from "react";
import Alert from "./components/Alert";
import Card from "./components/Card";
import Form from "./components/Form";

const url = "https://frontend-take-home.fetchrewards.com/form";

const App = () => {
  // Form values for drop down
  const [occupationsList, setOccupationsList] = useState([]);
  const [statesList, setStatesList] = useState([]);
  const [unable, setUnable] = useState(false);

  // Submission state values
  const [submitted, setSubmitted] = useState(false);
  const [success, setSuccess] = useState(false);

  const getData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      const { occupations, states } = data;
      setOccupationsList(occupations);
      setStatesList(states);
    } catch (error) {
      setUnable(true);
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (unable) {
    return (
      <main className="flex justify-center">
        <Card>
          <h1 className="card-title">
            Unable to get form data at this time &#128517;
          </h1>
          <button
            className="btn md:btn-md lg:btn-lg bg-indigo-700 hover:bg-indigo-800"
            onClick={() => window.location.reload(false)}
          >
            Try Again
          </button>
        </Card>
      </main>
    );
  }

  return (
    <main className="flex justify-center">
      <Card>
        {submitted ? (
          <Alert
            submitted={submitted}
            setSubmitted={setSubmitted}
            success={success}
          />
        ) : (
          <Form
            occupations={occupationsList}
            states={statesList}
            setSubmitted={setSubmitted}
            setSuccess={setSuccess}
          />
        )}
      </Card>
    </main>
  );
};

export default App;
