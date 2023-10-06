import { useContext } from "react";
import { useReducer } from "react";
import { createContext } from "react";
import { INIT_STATE, reducer } from "./Reducer";
import { useEffect } from "react";

const createValue = createContext();

const ContextApi = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  useEffect(() => {
    localStorage.setItem("watched", JSON.stringify(state.watched));
    localStorage.setItem("watchList", JSON.stringify(state.watchList));
  }, [state]);
  return (
    <createValue.Provider
      value={{
        watched: state.watched,
        watchList: state.watchList,
        movieDispatch: dispatch,
      }}
    >
      {children}
    </createValue.Provider>
  );
};

const useValue = () => useContext(createValue);

export { createValue, ContextApi, useValue };
