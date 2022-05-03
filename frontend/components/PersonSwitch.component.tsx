import React, { useState } from "react";
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
    <div>
      <Switch
        value={peoplePresent[person]}
        label={person}
        onChange={() => togglePerson(person)}
      />
    </div>
  );
};

export default PersonSwitch;
