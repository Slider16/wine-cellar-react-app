import React, { useState, useEffect } from "react";
import wineStore from "../stores/wineStore";
import WineList from "./WineList";
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

  return <WineList wines={wines} deleteWine={deleteWine} />;
}

export default WinesPage;
