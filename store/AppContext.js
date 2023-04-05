import React, { createContext, useEffect, useReducer, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import reducer from "../reducer/SongReducer";
import Songs from "../data/Data";

const INITIAL_STATE = {
  isLoading: false,
  isError: false,
  allSongList: [],
};

export const AppContext = createContext({ ...INITIAL_STATE });

const AppCtxProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const setFavouritesToStorgae = async (value) => {
    try {
      await AsyncStorage.setItem("favouriteList", JSON.stringify(value));
      getFavouritesFromStorage();
    } catch (error) {
      console.log("setting fav error : " + error);
    }
  };

  const mapFavouriteObjects = (favorites, allSongs) => {
    const mappedObject = allSongs.map((obj) => {
      if (favorites.includes(obj.number)) {
        return { ...obj, favourite: true };
      } else {
        return { ...obj, favourite: false };
      }
    });

    return mappedObject;
  };

  const getFavouritesFromStorage = async () => {
    try {
      const payload = await AsyncStorage.getItem("favouriteList");
      const fav = payload != null ? JSON.parse(payload) : null;
      return fav;
    } catch (error) {
      console.log("getting fav error : " + error);
    }
  };

  const getAllSongsFromFirebase = async () => {
    try {
      // from firebase : take song from firebase
      dispatch({ type: "SET_LOADING" });
      const favourites = await getFavouritesFromStorage();
      const mappedSongs = mapFavouriteObjects(favourites, Songs);
      dispatch({ type: "SET_API_DATA", payload: mappedSongs });
    } catch (err) {
      dispatch({ type: "API_ERROR" });
      console.log(err);
    }
  };

  const toggleFavouritesList = async (id) => {
    let favourites = await getFavouritesFromStorage();
    console.log(favourites, id);
    if (favourites.includes(id)) {
      favourites = favourites.filter((number) => number != id);
    } else {
      favourites.push(id);
    }
    setFavouritesToStorgae(favourites);

    dispatch({ type: "TOGGLE_FAVOURITE", payload: id });
  };

  useEffect(() => {
    getAllSongsFromFirebase();
  }, []);

  return (
    <AppContext.Provider value={{ ...state, toggleFavouritesList }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppCtxProvider;
