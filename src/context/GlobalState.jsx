import React, { createContext, useReducer, useEffect, useState } from "react";
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
  const [favicon, setFavicon] = useState("notfavorite");
  const [disabled, setDisabled] = useState(false);
  const [state, dispatch] = useReducer(AppReducer, initialState);
  useEffect(() => {
    localStorage.setItem("favoriteslist", JSON.stringify(state.favoriteslist));
    localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]);

  // actions
  const addtoFavorıtes = (restaurant) => {
    dispatch({ type: "ADD_RESTAURANT_TO_FAVORITESLIST", payload: restaurant });

    // state.favoriteslist.find(
    //   (o) => o.restaurant.id === restaurant.restaurant.id
    // )
    //   ? setDisabled(true)
    //   : setDisabled(false);

    state.favoriteslist.find(
      (o) => o.restaurant.id === restaurant.restaurant.id
    )
      ? setFavicon("favorite")
      : setFavicon("notfavorite");
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
        favicon,
        setFavicon,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
