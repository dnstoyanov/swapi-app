import classes from "./Style.module.css";
import React, { useEffect, useState } from "react";
import { fetchPlanet } from "../../src/services/sw-service";

const Planet = () => {
  const [planet, setPlanet] = useState({});
  const [planetID, setPlanetID] = useState(1);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPlanetData = async () => {
      try {
        const planetsResponse = await fetchPlanet(planetID);
        setPlanet(planetsResponse);
      } catch (error) {
        setError(error.message);
        planet.name = error.message;
      }
    };

    fetchPlanetData();
  }, [planetID]);

  return (
    <section>
      <div className={classes.card}>
        <img
          src={`https://starwars-visualguide.com/assets/img/planets/${planetID}.jpg`}
          alt=""
          onError={(e) => {
            e.target.src = `https://starwars-visualguide.com/assets/img/placeholder.jpg`
          }}
        />

        <h3>{planet.name}</h3>
        <li>Climate: {planet.climate}</li>
        <li>Terrain: {planet.terrain}</li>
        <li>Population: {planet.population}</li>
      </div>
      <section>
        <button onClick={() => setPlanetID((planetID) => planetID + 1)}>
          Get next planet
        </button>
      </section>
    </section>
  );
};
export default Planet;