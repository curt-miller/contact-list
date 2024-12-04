import React, { useState, useEffect } from "react";
import ContactRow from "./ContactRow";
import SelectedContact from "./SelectedContact";



function ContactList({ setSelectedContactId }) {
  const [contacts, setContacts] = useState([]);
  const API = "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users";

  useEffect(() => {
    async function fetchContacts() {
      try {
        const reply = await fetch(API);
        if (!reply.ok) {
          throw new Error("uh oh! could not fetch data!");
        }
        const contactsData = await reply.json();
        setContacts(contactsData);
      } catch (error) {
        console.error("oopsie diasy");
      }
    }
    fetchContacts();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th colSpan="3">Contact List</th>
        </tr>
      </thead>
      <tbody>
        <tr className="tableHeader">
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
        </tr>
        {contacts.map((contact) => {
          return <ContactRow key={contact.id}
                            cont={contact}
                            setSelectedContactId={setSelectedContactId}
                            />;
        })}
      </tbody>
    </table>
  );
}

export default ContactList;
