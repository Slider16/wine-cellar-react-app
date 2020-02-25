import React, { useState, useEffect } from "react";
import wineStore from "../stores/wineStore";
import WineList from "./WineList";
import { Link } from "react-router-dom";
import { loadWines, deleteWine } from "../actions/wineActions";

function WinesPage() {
  const [wines, setWines] = useState(wineStore.getWines());

  useEffect(() => {
    wineStore.addChangeListener(onChange);
    if (wineStore.getWines().length === 0) {
      loadWines();
    }

    // cleanup on unmount
    return () => wineStore.removeChangeListener(onChange);
  }, []);

  function onChange() {
    setWines(wineStore.getWines());
  }

  return (
    <>
      <h2>Wines</h2>
      <Link className="btn btn-primary" to="wine">
        Add Wine
      </Link>
      <WineList wines={wines} deleteWine={deleteWine} />
    </>
  );
}

export default WinesPage;
