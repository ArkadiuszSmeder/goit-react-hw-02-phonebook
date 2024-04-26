// import { useState } from "react"
// import { Input } from "./components/Input"
// import { Filter } from "./components/Filter"
// import { Contacts } from "components/Contacts"
// import { INITIAL_STATE } from "./constants/initial-form-state"
// import { nanoid } from "nanoid";

// function App() {
//   const [userData, setUserData] = useState(INITIAL_STATE)

//   const onChange = (event) => {
//     const { name, value } = event.target

//       setUserData(prev => ({
//         ...prev,
//         [name]: value,
//       }));
//   };

//   const onSubmit = (event) => {
//     event.preventDefault()

//     const newContact = {
//       id: nanoid(),
//       name: userData.name,
//       number: userData.number,
//     };

//   const isDuplicate = userData.contacts.some(
//     (contact) => contact.name.toLowerCase() === newContact.name.toLowerCase()
//   );

//   if (isDuplicate) {
//     alert(`${newContact.name} is already in contacts`);
//   } else {
//     setUserData((prev) => ({
//       ...prev,
//       name: "",
//       number: "",
//       contacts: [...prev.contacts, newContact],
//     }));
//   }
// };

//   const filteredContacts = userData.contacts.filter((contact) =>
//   contact.name.toLowerCase().includes(userData.filter.toLowerCase())
// );

//   const handleDeleteContact = (id) => {
//     setUserData((prev) => ({
//       ...prev,
//       contacts: prev.contacts.filter((contact) => contact.id !== id),
//     }));
//   };

//   return (
//       <form onSubmit={onSubmit}>
//         <h1>Phonebook</h1>
//         <Input type="text" label='Name' name='name' value={userData.name} onChange={onChange} pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$" title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan" required/>
//         <Input type="tel" label='Number' name='number' value={userData.number} onChange={onChange} pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}" title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +" required/>
//         <button type="submit">Add contacts</button>
//         <h2>Contacts</h2>
//         <Filter type="text" label='Find contacts by name' name='filter' value={userData.filter} onChange={onChange}/>
//         <Contacts contacts={filteredContacts} onDeleteContact={handleDeleteContact}/>
//       </form>
//   );
// }

// export default App;

import React, { useState } from "react";
import { ContactForm } from "./components/ContactForm";
import { Filter } from "./components/Filter";
import { Contacts } from "./components/Contacts";
import { INITIAL_STATE } from "./constants/initial-form-state";
import { nanoid } from "nanoid";
import { AppContainer } from "styled/styled-appContainer"; 

function App() {
  const [userData, setUserData] = useState(INITIAL_STATE);

  const handleFormSubmit = (formData) => {
    const newContact = {
      id: nanoid(),
      name: formData.name,
      number: formData.number,
    };

    const isDuplicate = userData.contacts.some(
      (contact) => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (isDuplicate) {
      alert(`${newContact.name} is already in contacts`);
    } else {
      setUserData((prev) => ({
        ...prev,
        contacts: [...prev.contacts, newContact],
      }));
    }
  };

  const handleDeleteContact = (id) => {
    setUserData((prev) => ({
      ...prev,
      contacts: prev.contacts.filter((contact) => contact.id !== id),
    }));
  };

  const filteredContacts = userData.contacts.filter((contact) =>
    contact.name.toLowerCase().includes(userData.filter.toLowerCase())
  );

  return (
    <AppContainer>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleFormSubmit} />
      <h2>Contacts</h2>
      <Filter type="text" label="Find contacts by name" name="filter" value={userData.filter} onChange={(e) => setUserData({ ...userData, filter: e.target.value })}/>
      <Contacts contacts={filteredContacts} onDeleteContact={handleDeleteContact} />
    </AppContainer>
  );
}

export default App;
