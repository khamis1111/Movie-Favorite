import * as actions from './ActionTypes';

const INIT_STATE = {
  watched: localStorage.getItem("watched") ? JSON.parse(localStorage.getItem("watched")): [],
  watchList: localStorage.getItem("watchList") ? JSON.parse(localStorage.getItem("watchList")): []
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_MOVIE_TO_WATCHLIST:
      return {
        ...state,
        watchList: [action.payload, ...state.watchList],
      };
    case actions.REMOVE_MOVIE_FROM_WATCHLIST:
      return {
        ...state,
        watchList: state.watchList.filter((m) => m.id !== action.payload.id),
      };
    case actions.MOVE_TO_WATCHLIST:
      return {
        ...state,
        watched: state.watched.filter((m) => m.id !== action.payload.id),
        watchList: [action.payload, ...state.watchList],
      };
    case actions.ADD_MOVIE_TO_WATCHED:
      return {
        ...state,
        watchList: state.watchList.filter((m) => m.id !== action.payload.id),
        watched: [action.payload, ...state.watched],
      };
    case actions.REMOVE_MOVIE_FROM_WATCHED:
      return {
        ...state,
        watched: state.watched.filter((m) => m.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export { INIT_STATE, reducer };
