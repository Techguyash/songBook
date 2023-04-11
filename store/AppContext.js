import React, { createContext, useEffect, useReducer, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import reducer from "../reducer/SongReducer";
import Songs from "../data/Data";

const INITIAL_STATE = {
  isLoading: false,
  isError: false,
  authenticated: true,
  allSongList: [],
  filteredList: [],
  toggleFavouritesList: () => {},
  filterSongByTitleHandler: () => {},
  userLoginHandler: () => {},
  userLogoutHandler: () => {},
  addSong: ({ number, title, lyrics }) => {},
  deleteSong: () => {},
  updateSong: (number, { title, lyrics }) => {},
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
      dispatch({ type: "SET_FAVOURITE_LIST", payload: mappedSongs });
    } catch (err) {
      dispatch({ type: "API_ERROR" });
      console.log(err);
    }
  };

  const toggleFavouritesList = async (id) => {
    let favourites = await getFavouritesFromStorage();
    if (favourites.includes(id)) {
      favourites = favourites.filter((number) => number != id);
    } else {
      favourites.push(id);
    }
    setFavouritesToStorgae(favourites);

    dispatch({ type: "TOGGLE_FAVOURITE", payload: id });
  };

  const filterSongByTitleHandler = (enteredText) => {
    const duplicateList = [...state.allSongList];
    const filteredSongs = duplicateList.filter((song) => {
      return song.title.toLowerCase().includes(enteredText);
    });
    dispatch({ type: "SET_FAVOURITE_LIST", payload: filteredSongs });
  };

  const userLoginHandler = () => {
    dispatch({ type: "SET_AUTH_TRUE" });
  };

  const userLogoutHandler = () => {
    dispatch({ type: "SET_AUTH_FALSE" });
  };

  // Need to change this to a firebase
  const addSong = (songData) => {
    dispatch({ type: "ADD_SONG", payload: songData });
  };

  const deleteSong = (number) => {
    dispatch({ type: "DELETE_SONG", payload: number });
  };

  const updateSong = (number, songData) => {
    dispatch({
      type: "UPDATE_SONG",
      payload: { number: number, data: songData },
    });
  };

  useEffect(() => {
    getAllSongsFromFirebase();
  }, []);

  const values = {
    ...state,
    toggleFavouritesList: toggleFavouritesList,
    filterSongByTitleHandler: filterSongByTitleHandler,
    userLoginHandler: userLoginHandler,
    userLogoutHandler: userLogoutHandler,
    addSong: addSong,
    updateSong: updateSong,
    deleteSong: deleteSong,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export default AppCtxProvider;
