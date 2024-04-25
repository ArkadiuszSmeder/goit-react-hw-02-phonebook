// import "./label.css"
// import { nanoid } from "nanoid";

// export const Input = ({ name, value, onChange, type, label}) => {
//     const uniqueID = nanoid();

//     return <>
//     <label className="label" htmlFor={uniqueID}>{label}</label>
//     <input id={uniqueID} name={name} value={value} onChange={onChange} type={type}/>
//     </>
// }

import React, { useState } from "react";
import { nanoid } from "nanoid";

export const Input = ({ onSubmit }) => {
  const [formData, setFormData] = useState({ name: "", number: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
    setFormData({ name: "", number: "" });
  };

  const uniqueID = nanoid();

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={uniqueID}>Name</label>
      <input
        id={uniqueID}
        name="name"
        value={formData.name}
        onChange={handleChange}
        type="text"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label htmlFor={uniqueID}>Number</label>
      <input
        id={uniqueID}
        name="number"
        value={formData.number}
        onChange={handleChange}
        type="tel"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button type="submit">Add contact</button>
    </form>
  );
};