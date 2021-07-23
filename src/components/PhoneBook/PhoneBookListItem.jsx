import { Item } from "./PhoneBook.styled";
import { Button } from "../PhoneBookForm/PhoneBookForm.styled";

function PhoneBookListItem({ name, number, onDeleteContact, id }) {
  return (
    <Item>
      <p>
        {name} : {number}
      </p>

      <Button onClick={onDeleteContact} id={id}>
        Delete
      </Button>
    </Item>
  );
}
export default PhoneBookListItem;
