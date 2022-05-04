import React from "react";
import { Switch } from "@airtable/blocks/ui";

export const PersonSwitch = ({
  person,
  peoplePresent,
  setPeoplePresent,
}: {
  person: string;
  peoplePresent: {};
  setPeoplePresent: React.Dispatch<React.SetStateAction<{}>>;
}) => {
  const togglePerson = (person) => {
    setPeoplePresent({
      ...peoplePresent,
      [person]: peoplePresent[person] ? false : true,
    });
    console.log(peoplePresent);
  };

  return (
    <div style={{padding: "0px 10px"}}>
      <Switch
        value={peoplePresent[person]}
        label={person}
        onChange={() => togglePerson(person)}
        width="120px"
      />
    </div>
  );
};

export default PersonSwitch;
