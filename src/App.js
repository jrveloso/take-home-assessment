import React, { useEffect, useState } from "react";
import Form from "./components/Form";

const url = `https://frontend-take-home.fetchrewards.com/form`;

const App = () => {
  // Form values for drop down
  const [occupationsList, setOccupationsList] = useState([]);
  const [statesList, setStatesList] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      const { occupations, states } = data;
      setOccupationsList(occupations);
      setStatesList(states);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <main className="flex justify-center">
      <div className="card w-96 bg-base-100 shadow-xl mt-5">
        <div className="card-body">
          <h2 className="card-title">Sign up!</h2>
          <Form occupations={occupationsList} states={statesList} />
        </div>
      </div>
    </main>
  );
};

export default App;
