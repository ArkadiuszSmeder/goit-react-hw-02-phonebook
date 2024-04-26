import React from "react";
import PropTypes from "prop-types";
import { DeleteButton, ListElement } from "styled/styled-contacts";

export const Contacts = ({ contacts, onDeleteContact }) => {

  return (
    <ul>
      {contacts.map((contact) => (
        <ListElement key={contact.id}>
          {contact.name}: {contact.number}
          <DeleteButton onClick={() => onDeleteContact(contact.id)}>Delete</DeleteButton>
        </ListElement>
      ))}
    </ul>
  );
};

Contacts.propTypesropTypes = {
  contact: PropTypes.array,
  onDeleteContact: PropTypes.func.isRequired,
  }
