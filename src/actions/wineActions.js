import dispatcher from "../appDispatcher";
import * as wineApi from "../api/wineApi";
import actionTypes from "./actionTypes";

export function saveWine(wine) {
  return wineApi.saveWine(wine).then(savedWine => {
    // Hey dispatcher, go tell ALL THE STORES that a Wine was just created.
    dispatcher.dispatch({
      actionType: wine._id ? actionTypes.UPDATE_WINE : actionTypes.CREATE_WINE,
      wine: savedWine
    });
  });
}

export function loadWines() {
  return wineApi.getWines().then(wines => {
    dispatcher.dispatch({
      actionType: actionTypes.LOAD_WINES,
      wines: wines
    });
  });
}

export function deleteWine(id) {
  return wineApi.deleteWine(id).then(() => {
    dispatcher.dispatch({
      actionType: actionTypes.DELETE_WINE,
      id: id
    });
  });
}
