import { useState, useEffect } from "react";

import { v4 as uuidv4 } from "uuid";
import PhoneBookList from "./components/PhoneBook/PhoneBookList";
import PhoneBookForm from "./components/PhoneBookForm/PhoneBookForm";
import PhoneBookFilter from "./components/PhoneBook/PhoneBookFilter";
import filterContacts from "./components/helpers/FilterContacts";
import { Aside, Block } from "./components/PhoneBook/PhoneBook.styled";

export default function App() {
  const [contacts, setContacts] = useState([
    { name: "Rosie Simpson", number: "459-12-56", id: "id-1" },
    { name: "Hermione Kline", number: "443-89-12", id: "id-2" },
    { name: "Eden Clements", number: "645-17-79", id: "id-3" },
    { name: "Annie Copeland", number: "227-91-26", id: "id-4" },
  ]);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      case "filter":
        setFilter(value);
        break;

      default:
        return;
    }
  };

  const handleAddContact = (e) => {
    e.preventDefault();

    if (
      contacts.some((el) => el.name === name) ||
      contacts.some((el) => el.number === number)
    ) {
      alert(`${name} is already in contacts`);
    } else {
      let contact = {
        name: name,
        number: number,
        id: uuidv4(),
      };
      setContacts((prev) => [...prev, contact], setName(""), setNumber(""));
    }
  };
  const handleDeleteContact = (e) => {
    setContacts(() => contacts.filter((el) => el.id !== e.target.id));
  };
  const contactsArray = filterContacts(contacts, filter);
  return (
    <Aside>
      <h1>Phonebook</h1>
      <PhoneBookForm
        contacts={contactsArray}
        name={name}
        number={number}
        onInput={handleChangeInput}
        onAddContact={handleAddContact}
      />
      <Block>
        <h2>Contacts</h2>
        <PhoneBookFilter filterValue={filter} onSetFilter={handleChangeInput} />
        <PhoneBookList
          contacts={contactsArray}
          onDeleteContact={handleDeleteContact}
        />
      </Block>
    </Aside>
  );
}
