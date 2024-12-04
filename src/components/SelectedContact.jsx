import React, { useState, useEffect } from "react";

function SelectedContact({ contactId }) {
  const [contact, setContactDetails] = useState([]);
  const API = "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/";

  useEffect(() => {
    async function fetchContactDetails() {
      try {
        const reply = await fetch(API + `${contactId}`);
        if (!reply.ok) {
          throw new Error("uh oh! could not fetch data!");
        }
        const contactsData = await reply.json();
        setContactDetails(contactsData);
      } catch (error) {
        console.error("oopsie diasy");
      }
    }
    fetchContactDetails();
  }, []);

  return (
    <ul>
      <li><strong>ID:</strong> {contact.id}</li>
      <li><strong>Name:</strong> {contact.name}</li>
      <li><strong>Username:</strong> {contact.username}</li>
      <li><strong>Email:</strong> {contact.email}</li>
      <li>
        <strong>Address:</strong> {contact.address?.street},
                                    {contact.address?.suite},
                                    {contact.address?.city},
                                    {contact.address?.zipcode},
                                    {contact.address?.geo?.lat},
                                    {contact.address?.geo?.lng}
      </li>
      <li><strong>Phone:</strong> {contact.phone}</li>
      <li><strong>Website:</strong> {contact.website}</li>
      <li><strong>Company:</strong> {contact.company?.name}, {contact.company?.catchPhrase}, {contact.company?.bs}</li>
    </ul>
  );
}

export default SelectedContact;
