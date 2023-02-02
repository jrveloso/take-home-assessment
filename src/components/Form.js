import React, { useState } from "react";
import TextInput from "./TextInput";
import SelectInput from "./SelectInput";

const url = `https://frontend-take-home.fetchrewards.com/form`;

const Form = ({ occupations, states, setSubmitted, setSuccess }) => {
  const [form, setForm] = useState({
    name: { id: 1, type: "text", inputValue: "" },
    email: { id: 2, type: "text", inputValue: "" },
    password: { id: 3, type: "text", inputValue: "" },
    occupation: { id: 4, type: "select", inputValue: "" },
    state: { id: 5, type: "select", inputValue: "" },
  });
  const formArray = Object.entries(form);

  // Placeholder text switch case
  const createPlaceholder = (name) => {
    switch (name) {
      case "name":
        return "Jonah Hill";
      case "email":
        return "jonahhill@demo.com";
      case "password":
        return "•••••••";
    }
  };

  // Provide proper label casing
  const createLabel = (label) => label.charAt(0).toUpperCase() + label.slice(1);

  // Handler for text input events
  const handleChange = ({ target: { name, value } }) => {
    setForm({
      ...form,
      [name]: {
        ...form[name],
        inputValue: value,
      },
    });
  };

  // Handle submit event
  const handleSubmit = async (event) => {
    event.preventDefault();
    let formComplete = false;
    const inputs = Object.values(form);
    formComplete = inputs.every((input) => input.inputValue.length > 0);

    if (formComplete) {
      sendForm();
    }
  };

  // POST request to Fetch api
  const sendForm = async () => {
    try {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      };
      const response = await fetch(url, requestOptions);
      if (response.ok) {
        const data = await response.json();
        // console.log(data)
        setSubmitted(true);
        setSuccess(true);
        // console.log("SUCCESS");
      }
    } catch (error) {
      setSubmitted(true);
      setSuccess(false);
      console.log(error);
    }
  };

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
      {formArray.map((input) => {
        const name = input[0];
        const {id, type, inputValue} = input[1];
        if (type === "select") {
          return (
            <SelectInput
              name={name}
              value={inputValue}
              options={name === "state" ? states : occupations}
              onChange={handleChange}
              createLabel={createLabel}
              key={id}
            />
          );
        } else {
          return (
            <TextInput
              name={name}
              value={inputValue}
              placeholder={createPlaceholder(name)}
              onChange={handleChange}
              createLabel={createLabel}
              key={id}
            />
          );
        }
      })}
      <button
        type="submit"
        className="btn md:btn-md lg:btn-lg bg-indigo-700 hover:bg-indigo-800"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
