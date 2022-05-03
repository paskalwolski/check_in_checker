import { initializeBlock } from "@airtable/blocks/ui";
import React, { useState } from "react";
import { Box } from "@airtable/blocks/ui";
import { PersonSwitch } from "./components/PersonSwitch.component";

function CheckInChecker() {
  const people: string[] = ["Paskal", "Caitlin"];
  const peopleInit = {};
  people.forEach((person) => {
    peopleInit[person] = true;
  });

  const [peoplePresent, setPeoplePresent] = useState(peopleInit);

  return (
    <Box>
      <div>LIST OF USERS</div>
      {people.map((person) => {
        return (
          <PersonSwitch
            key={person}
            {...{ person, peoplePresent, setPeoplePresent }}
          ></PersonSwitch>
        );
      })}
      <div>End of People</div>
    </Box>
  );
}

initializeBlock(() => <CheckInChecker />);
