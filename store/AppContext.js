import React, { createContext, useEffect, useReducer } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

import reducer from "../reducer/SongReducer";
import { fetchAllDataFromFirebase } from "../api/songs-http";
import * as SplashScreeen from "expo-splash-screen";

const INITIAL_STATE = {
  isLoading: false,
  isError: false,
  authenticated: false,
  allSongList: [],
  filteredList: [],
  textFontSize: 20,
  getAllSongsFromFirebase: () => {},
  toggleFavouritesList: () => {},
  filterSongByTitleHandler: () => {},
  userLoginHandler: () => {},
  userLogoutHandler: () => {},
  addSong: ({ number, title, lyrics }) => {},
  deleteSong: () => {},
  updateSong: (number, { title, lyrics }) => {},
  setTextFontSize: (size) => {},
};

export const AppContext = createContext({ ...INITIAL_STATE });

const AppCtxProvider = ({ children }) => {
  const navigate = useNavigation();

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
    if (favorites == null) {
      const mappedObjects = allSongs.map((obj) => {
        return { ...obj, favorite: false };
      });
      return mappedObjects;
    }

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
      const data = await fetchAllDataFromFirebase();

      const favourites = await getFavouritesFromStorage();
      // for local songs
      // const mappedSongs = mapFavouriteObjects(favourites, Songs);

      const mappedSongs = await mapFavouriteObjects(favourites, data);
      dispatch({ type: "SET_API_DATA", payload: mappedSongs });
      dispatch({ type: "SET_FAVOURITE_LIST", payload: mappedSongs });
    } catch (err) {
      console.log(err);
    }
  };

  const toggleFavouritesList = async (id) => {
    let favourites = await getFavouritesFromStorage();
    if (favourites == null) {
      favourites = [];
      favourites.push(id);
    } else {
      if (favourites.includes(id)) {
        favourites = favourites.filter((number) => number != id);
      } else {
        favourites.push(id);
      }
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
    navigate.navigate("HomeScreen");
  };

  const userLogoutHandler = () => {
    if (state.authenticated) dispatch({ type: "SET_AUTH_FALSE" });
  };

  const setTextFontSize = (fontSize) => {
    dispatch({ type: "SET_TEXT_FONT", payload: fontSize });
  };

  const addSong = (songData) => {
    dispatch({ type: "ADD_SONG", payload: songData });
  };

  const deleteSong = (number) => {
    dispatch({ type: "DELETE_SONG", payload: number });
  };

  const updateSong = async (number, songData) => {
    await dispatch({
      type: "UPDATE_SONG",
      payload: { number: number, data: songData },
    });
  };

  const appReadyState = async () => {
    SplashScreeen.preventAutoHideAsync();
    console.log("App contest : 144 : loading started");
    await getAllSongsFromFirebase();
    console.log("App contest : 146 : loading complete");
    await SplashScreeen.hideAsync();
  };

  useEffect(() => {
    appReadyState();
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
    getAllSongsFromFirebase: getAllSongsFromFirebase,
    setTextFontSize: setTextFontSize,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export default AppCtxProvider;
