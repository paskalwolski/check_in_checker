import { Button, initializeBlock, useGlobalConfig } from "@airtable/blocks/ui";
import React, { useEffect, useState } from "react";
import { Box } from "@airtable/blocks/ui";
import { PersonSwitch } from "./components/PersonSwitch.component";

function CheckInChecker() {
  const people: string[] = [
    "Paskal",
    "Caitlin",
    "John",
    "Tiffany",
    "Hendrik",
    "Kathy",
    "Rowan",
  ];
  const globalConfig = useGlobalConfig();
  const storedPeople: {} = globalConfig.get("peoplePresent");
  let peopleInit: {} = {};
  if (!storedPeople) {
    people.forEach((person) => {
      peopleInit[person] = true;
    });
  } else {
    peopleInit = storedPeople;
  }
  //   const peopleInit = {};

  const [peoplePresent, setPeoplePresent] = useState(peopleInit);
  const [sacrifice, setSacrifice] = useState<String>("");

  const getSacrifice = () => {
    const sacrificeArr = [];
    for (const person in peoplePresent) {
      if (peoplePresent[person]) {
        sacrificeArr.push(person);
      }
    }
    setSacrifice(sacrificeArr[Math.floor(Math.random() * sacrificeArr.length)]);
  };

  useEffect(() => {
    setSacrifice("");
    globalConfig.setAsync("peoplePresent", peoplePresent);
  }, [peoplePresent, globalConfig]);

  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "lightgray",
        height: "100vh",
      }}
    >
      <div>
        <h1>Who is Here?</h1>
      </div>
      <Box
        style={{
          display: "flex",
          flexWrap: "wrap",
          padding: "10px",
          //   flexDirection: "column",
          alignItems: "center",
          backgroundColor: "lightblue",
          justifyContent: "space-between",
        }}
      >
        {people.map((person) => {
          return (
            <div key={person}>
              <PersonSwitch
                {...{ person, peoplePresent, setPeoplePresent }}
              ></PersonSwitch>
            </div>
          );
        })}
      </Box>
      {!sacrifice && (
        <Button
          onClick={() => getSacrifice()}
          style={{ margin: "10px" }}
          icon="personal"
        >
          Select a Sacrifice
        </Button>
      )}
      {sacrifice && (
        <div>
          <h2>{sacrifice} has been selected!</h2>
          <h6>This decision is final</h6>
        </div>
      )}
    </Box>
  );
}

initializeBlock(() => <CheckInChecker />);
