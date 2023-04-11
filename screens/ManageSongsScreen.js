import { useContext, useLayoutEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import SongForm from "../components/manageSong/SongForm";
import Colors from "../constants/Colors";
import { AppContext } from "../store/AppContext";
import Button from "../UI/Button";
import IconButton from "../UI/IconButton";

const ManageSongsScreen = ({ route, navigation }) => {
  const { updateSong, deleteSong, addSong, allSongList } =
    useContext(AppContext);

  const editedSongId = route.params?.number;
  const isEditing = !!editedSongId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Song" : "Add Song",
    });
  }, [navigation, isEditing]);

  const selectedSong = allSongList.find((song) => song.number === editedSongId);

  const deleteSongHandler = () => {
    deleteSong(editedSongId);
    navigation.goBack();
  };

  const cancelHandler = () => {
    navigation.goBack();
  };

  const confirmHandler = (songData) => {
    if (isEditing) {
      updateSong(editedSongId, songData);
    } else {
      addSong(songData);
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
