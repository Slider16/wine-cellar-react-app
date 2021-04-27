import { EventEmitter } from "events";
import Dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";
let _wines = [];

class WineStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getWines() {
    return _wines;
  }

  getWineBySlug(slug) {
    return _wines.find(wine => wine.slug === slug);
  }
}

const store = new WineStore();

Dispatcher.register(action => {
  switch (action.actionType) {
    case actionTypes.DELETE_WINE:
      _wines = _wines.filter(wine => wine._id !== action.id);
      store.emitChange();
      break;

    case actionTypes.CREATE_WINE:
      action.wine.slug = createSlug(action.wine.name);
      _wines.push(action.wine);
      store.emitChange();
      break;

    case actionTypes.UPDATE_WINE:
      action.wine.slug = createSlug(action.wine.name);
      _wines = _wines.map(wine =>
        wine._id === action.wine._id ? action.wine : wine
      );
      store.emitChange();
      break;

    case actionTypes.LOAD_WINES:
      const returnWines = action.wines.map(wine => {
        wine.slug = createSlug(wine.name);
        return wine;
      });
      _wines = returnWines;
      store.emitChange();
      break;

    default:
    // nothing to do here
  }
});

// // Returns a URL friendly slug
function createSlug(value) {
  return value
    .replace(/[^a-z0-9_]+/gi, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();
}

export default store;
