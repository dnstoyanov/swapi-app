import classes from "./Style.module.css";
import { fetchStarship } from "../../src/services/sw-service";
import React, { useEffect, useState } from "react";

const Ship = () => {
  const [ship, setShip] = useState({});
  const [shipID, setShipID] = useState(1);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchShipData = async () => {
      try {
        const shipsResponse = await fetchStarship(shipID);
        setShip(shipsResponse);
      } catch (error) {
        setError(error.message);
        console.log(error.response.status);
        // if (error === 404) {
        //   shipID += 1;  //да се види така дали няма да стане да премести нещата
        // // ship.name = error.message
      } 
    };

    fetchShipData();
  }, [shipID]);

  return (
    <section>
      <div className={classes.card}>
        <img
          src={`https://starwars-visualguide.com/assets/img/starships/${shipID}.jpg`}
          alt=""
          onError={(e) => {
            e.target.src = `https://starwars-visualguide.com/assets/img/placeholder.jpg`
          }}
        />
        <h3>{ship.name}</h3>
        <li>Manufacturer: {ship.manufacturer}</li>
        <li>Cost: {ship.cost_in_credits}</li>
        <li>Crew: {ship.crew}</li>
      </div>
      <section>
        <button onClick={() => setShipID((shipID) => shipID + 1)}>
          Get next ship
        </button>
      </section>
    </section>
  );
};
export default Ship;
