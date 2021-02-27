import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

// initial state
const initialState = {
  favoriteslist: localStorage.getItem("favoriteslist")
    ? JSON.parse(localStorage.getItem("favoriteslist"))
    : [],
};

// create context
export const GlobalContext = createContext(initialState);

// provider components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  useEffect(() => {
    localStorage.setItem("favoriteslist", JSON.stringify(state.favoriteslist));
    localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]);

  // actions
  const addtoFavorıtes = (movie) => {
    dispatch({ type: "ADD_RESTAURANT_TO_FAVORITESLIST", payload: movie });
  };

  const removeFromFavorities = (id) => {
    dispatch({ type: "REMOVE_RESTAURANT_FROM_FAVORITESLIST", payload: id });
  };

  return (
    <GlobalContext.Provider
      value={{
        favoriteslist: state.favoriteslist,
        addtoFavorıtes,
        removeFromFavorities,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
