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
      _wines = _wines.filter(wine => wine._id !== wine.id);
      store.emitChange();
      break;

    case actionTypes.CREATE_WINE:
      _wines.push(action.wine);
      store.emitChange();
      break;

    case actionTypes.UPDATE_WINE:
      _wines = _wines.map(wine =>
        wine.id === action.wine.id ? action.wine : wine
      );
      store.emitChange();
      break;

    case actionTypes.LOAD_WINES:
      _wines = action.wines;
      store.emitChange();
      break;

    default:
    // nothing to do here
  }
});

export default store;
