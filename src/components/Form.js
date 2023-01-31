import React, { useState } from "react";
import TextInput from "./TextInput";
import SelectInput from "./SelectInput";

const url = `https://frontend-take-home.fetchrewards.com/form`;

const Form = ({ occupations, states }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    occupation: "",
    state: "",
  });
  const { name, email, password, occupation, state } = form;

  // Proper label case
  const createLabel = (label) => label.charAt(0).toUpperCase() + label.slice(1)
  console.log(createLabel("name"))

  // Handle text input events
  const handleChange = ({ target: { name, value } }) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  // Handle submit event
  const handleSubmit = async (event) => {
    event.preventDefault();
    sendForm();
  };

  // POST request to fetch api
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
        console.log("SUCCESS");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
      <TextInput
        name="name"
        value={name}
        placeholder="John Doe"
        onChange={handleChange}
        createLabel={createLabel}
      />
      <TextInput
        name="email"
        value={email}
        placeholder="johndoe@doe.com"
        onChange={handleChange}
        createLabel={createLabel}
      />
      <TextInput
        name="password"
        value={password}
        placeholder="•••••••"
        onChange={handleChange}
        createLabel={createLabel}
      />

      <SelectInput
        name="occupation"
        value={occupation}
        options={occupations}
        onChange={handleChange}
        createLabel={createLabel}
      />
      <SelectInput
        name="state"
        value={state}
        options={states}
        onChange={handleChange}
        createLabel={createLabel}
      />
      <button
        type="submit"
        className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-indigo-700 hover:bg-indigo-800"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
