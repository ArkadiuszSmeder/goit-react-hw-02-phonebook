import { useState } from "react"
import { Input } from "./components/Input"
import { Filter } from "./components/Filter"
import { Contacts } from "components/Contacts"
import { INITIAL_STATE } from "./constants/initial-form-state"
import { nanoid } from "nanoid";

function App() {
  const [userData, setUserData] = useState(INITIAL_STATE)

  const onChange = (event) => {
    const { name, value } = event.target

      setUserData(prev => ({
        ...prev,
        [name]: value,
      }));
  };

  const onSubmit = (event) => {
    event.preventDefault()

    const newContact = {
      id: nanoid(),
      name: userData.name,
      number: userData.number,
    };

  // Check for duplicate name before adding
  const isDuplicate = userData.contacts.some(
    (contact) => contact.name.toLowerCase() === newContact.name.toLowerCase()
  );

  if (isDuplicate) {
    alert(`${newContact.name} is already in contacts`);
  } else {
    setUserData((prev) => ({
      ...prev,
      name: "",
      number: "",
      contacts: [...prev.contacts, newContact],
    }));
  }
};

  const filteredContacts = userData.contacts.filter((contact) =>
  contact.name.toLowerCase().includes(userData.filter.toLowerCase())
);

  return (
      <form onSubmit={onSubmit}>
        <h1>Phonebook</h1>
        <Input type="text" label='Name' name='name' value={userData.name} onChange={onChange} pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$" title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan" required/>
        <Input type="tel" label='Number' name='number' value={userData.number} onChange={onChange} pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}" title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +" required/>
        <button type="submit">Add contacty</button>
        <Filter type="text" label='Find contacts by name' name='filter' value={userData.filter} onChange={onChange}/>
        <h1>Contacts</h1>
        <Contacts contacts={filteredContacts}/>
      </form>
  );
}

export default App;