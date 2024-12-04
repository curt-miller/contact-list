import React, { useState } from "react";
import SelectedContact from "./SelectedContact";


function ContactRow({setSelectedContactId, cont}) {
    return(
        <tr
            onClick={() => {
                setSelectedContactId(cont.id);
            }}
            >
            <td>{cont.name}</td>
            <td>{cont.email}</td>
            <td>{cont.phone}</td>
        </tr>
    )
}

export default ContactRow