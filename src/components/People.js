import classes from "./Style.module.css";
import React, { useEffect, useState } from "react";
import { fetchPerson } from "../../src/services/sw-service";

const People = () => {
  const [person, setPerson] = useState({});
  const [personID, setPersonID] = useState(1);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPersonData = async () => {
      try {
        const peopleResponse = await fetchPerson(personID);
        setPerson(peopleResponse);
      } catch (error) {
        setError(error.message);
        person.name = error.message;
      }
    };

    fetchPersonData();
  }, [personID]);
  return (
    <section>
      <div className={classes.card}>
        <img
          src={`https://starwars-visualguide.com/assets/img/characters/${personID}.jpg`}
          alt=""
          onError={(e) => {
            e.target.src = `https://starwars-visualguide.com/assets/img/placeholder.jpg`
          }}
        />
        <h3>{person.name}</h3>
        <li>Gender: {person.gender}</li>
        <li>Birth Year: {person.birth_year}</li>
        <li>Eye color: {person.eye_color}</li>
      </div>
      <section>
        <button onClick={() => setPersonID((personID) => personID + 1)}>
          Get next person
        </button>
      </section>
    </section>
  );
};
export default People;
