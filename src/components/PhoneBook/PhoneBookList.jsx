import PhoneBookListItem from "./PhoneBookListItem";

function PhoneBookList({ contacts, onDeleteContact }) {
  return (
    <ul>
      {contacts.map(({ name, number, id }) => {
        return (
          <PhoneBookListItem
            key={id}
            number={number}
            name={name}
            id={id}
            onDeleteContact={onDeleteContact}
          />
        );
      })}
    </ul>
  );
}
export default PhoneBookList;
