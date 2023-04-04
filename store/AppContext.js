import React, { createContext, useEffect, useReducer, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import reducer from "../reducer/SongReducer";
import Songs from "../data/Data";

const INITIAL_STATE = {
  isLoading: false,
  isError: false,
  favouriteSongList: [],
  allSongList: [],
  addSongToFavList: () => {},
  removeSongFromFavList: () => {},
};

export const AppContext = createContext({ ...INITIAL_STATE });

const AppCtxProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const setDummyFavourites = async () => {
    try {
      const value = [1, 2, 10];
      await AsyncStorage.setItem("favouriteList", JSON.stringify(value));
    } catch (error) {
      console.log("setting fav error : " + error);
    }
  };

  const mapFavouriteObjects = () => {
    const favorites = state.favouriteSongList;
    const allSongs = state.allSongList;

    const mappedObject = allSongs.map((obj) => {
      if (favorites.includes(obj.number)) {
        return { ...obj, favourite: true };
      } else {
        return { ...obj, favourite: false };
      }
    });

    dispatch({ type: "SET_API_DATA", payload: mappedObject });
  };

  const getDummyFavourites = async () => {
    try {
      const payload = await AsyncStorage.getItem("favouriteList");
      const fav = payload != null ? JSON.parse(payload) : null;

      // mapFavouriteObjects();

      dispatch({ type: "SET_FAVOURITE_DATA", payload: fav });
    } catch (error) {
      console.log("getting fav error : " + error);
    }
  };

  const getAllSongsFromFirebase = async () => {
    dispatch({ type: "SET_LOADING" });
    try {
      await dispatch({ type: "SET_API_DATA", payload: Songs });
    } catch (err) {
      dispatch({ type: "API_ERROR" });
      console.log(err);
    }
  };

  const addSongToFavList = (id) => {
    let temp = state.favouriteSongList;
    if (!temp.includes(id)) {
      temp.push(id);
      dispatch({ type: "SET_FAVOURITE_DATA", payload: temp });
    }
  };
  const removeSongFromFavList = () => {
    console.log(temp);
  };

  useEffect(() => {
    // Remove this : used for testing purposes
    getAllSongsFromFirebase();
    setDummyFavourites();
    getDummyFavourites();

    //--------------------------------
  }, []);

  return (
    <AppContext.Provider
      value={{ ...state, addSongToFavList, removeSongFromFavList }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppCtxProvider;
