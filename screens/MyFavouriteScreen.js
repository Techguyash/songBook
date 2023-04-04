import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useContext, useLayoutEffect, useState } from "react";
import { AppContext } from "../store/AppContext";
import SongList from "../components/SongList";

const MyFavouriteScreen = () => {
  const { favouriteSongList, allSongList } = useContext(AppContext);

  return (
    <>{favouriteSongList.length < 1 ? <Text>No Favourites here</Text> : null}</>
  );
};

export default MyFavouriteScreen;
