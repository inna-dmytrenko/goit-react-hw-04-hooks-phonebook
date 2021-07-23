import { Label, Input } from "../PhoneBookForm/PhoneBookForm.styled";

function PhoneBookFilter({ onSetFilter, filterValue }) {
  return (
    <Label>
      <p>Filter contacts by name: </p>
      <Input
        name="filter"
        onInput={onSetFilter}
        type="text"
        value={filterValue}
        placeholder="Name"
      />
    </Label>
  );
}

export default PhoneBookFilter;
