import { useContext, useLayoutEffect } from "react";
import { View, StyleSheet } from "react-native";
import {
  createSongInFirebase,
  deleteSongInFirebase,
  updateSongInFirebase,
} from "../api/songs-http";
import SongForm from "../components/manageSong/SongForm";
import Colors from "../constants/Colors";
import { AppContext } from "../store/AppContext";
import IconButton from "../UI/IconButton";

const ManageSongsScreen = ({ route, navigation }) => {
  const {
    updateSong,
    deleteSong,
    addSong,
    getAllSongsFromFirebase,
    allSongList,
  } = useContext(AppContext);

  const editedSongNumber = route.params?.number;
  const editedSongId = route.params?.id;
  const isEditing = !!editedSongNumber;

  console.log(`editedSongId 26: ${editedSongId}`);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Song" : "Add Song",
    });
  }, [navigation, isEditing]);

  const selectedSong = allSongList.find((song) => {
    return song.number === editedSongNumber;
  });

  const deleteSongHandler = async () => {
    await deleteSongInFirebase(editedSongId);
    deleteSong(editedSongNumber);
    await getAllSongsFromFirebase();
    navigation.goBack();
  };

  const cancelHandler = () => {
    navigation.goBack();
  };

  const confirmHandler = async (songData) => {
    console.log("line 48", songData.number, " :", songData.title);
    if (isEditing) {
      updateSong(editedSongNumber, songData);
      await updateSongInFirebase(editedSongId, songData);
    } else {
      addSong(songData);
      await createSongInFirebase(songData);
      await getAllSongsFromFirebase();
    }

    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <SongForm
        onCancel={cancelHandler}
        onSubmit={confirmHandler}
        submitButtonLabel={isEditing ? "Update" : "Add"}
        defaultValues={selectedSong}
      />

      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={Colors.error}
            size={36}
            onPress={deleteSongHandler}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: Colors.background,
  },

  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: Colors.accentBackground,
    alignItems: "center",
  },
});

export default ManageSongsScreen;
