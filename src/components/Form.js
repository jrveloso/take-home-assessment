import React, { useState } from "react";
import TextInput from "./TextInput";
import SelectInput from "./SelectInput";

const url = `https://frontend-take-home.fetchrewards.com/form`;

const Form = ({ occupations, states, setSubmitted, setSuccess }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    occupation: "",
    state: "",
  });
  const formArray = Object.entries(form);

  // Placeholder text switch case
  const createPlaceholder = (inputName) => {
    switch (inputName) {
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
      [name]: value,
    });
  };

  // Handle submit event
  const handleSubmit = async (event) => {
    event.preventDefault();
    let formComplete = false;
    const inputs = Object.values(form);
    formComplete = inputs.every((input) => input.length > 0);

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
        console.log(response);
        const data = await response.json();
        setSubmitted(true);
        setSuccess(true);
        console.log(data);
        console.log("SUCCESS");
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
        const value = input[1];
        if (name === "state" || name === "occupation") {
          return (
            <SelectInput
              name={name}
              value={value}
              options={name === "state" ? states : occupations}
              onChange={handleChange}
              createLabel={createLabel}
            />
          );
        } else {
          return (
            <TextInput
              name={name}
              value={value}
              placeholder={createPlaceholder(name)}
              onChange={handleChange}
              createLabel={createLabel}
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
