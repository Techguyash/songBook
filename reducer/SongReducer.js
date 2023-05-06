const SongReducer = (state, action) => {
  switch (action.type) {
    case "ADD_SONG":
      return {
        ...state,
        allSongList: [...state.allSongList, { ...action.payload }],
      };

    case "UPDATE_SONG":
      const updatableSongIndex = state.allSongList.findIndex(
        (song) => song.number === action.payload.number
      );

      const updatableSong = state.allSongList[updatableSongIndex];
      const updatedSong = { ...updatableSong, ...action.payload.data };
      const updatedAllSongList = [...state.allSongList];
      updatedAllSongList[updatableSongIndex] = updatedSong;

      return {
        ...state,
        allSongList: updatedAllSongList,
      };

    case "DELETE_SONG":
      const filteredData = state.allSongList.filter(
        (song) => song.number !== action.payload
      );
      return {
        ...state,
        allSongList: filteredData,
      };

    case "SET_AUTH_TRUE":
      return {
        ...state,
        authenticated: true,
      };

    case "SET_AUTH_FALSE":
      return {
        ...state,
        authenticated: false,
      };

    case "SET_API_DATA":
      return {
        ...state,
        allSongList: action.payload,
        filteredList: action.payload,
      };

    case "SET_FILTERED_DATA":
      return {
        ...state,
        filteredList: state.filteredList,
      };

    case "TOGGLE_FAVOURITE":
      const allSongsDuplicate = [...state.allSongList];
      const id = action.payload;
      const songs = allSongsDuplicate.map((song) => {
        if (song.number == id) {
          return { ...song, favourite: !song.favourite };
        }
        return song;
      });
      return { ...state, allSongList: songs, filteredList: songs };

    case "SET_FAVOURITE_LIST":
      return {
        ...state,
        filteredList: action.payload,
      };

    case "SET_TEXT_FONT":
      return {
        ...state,
        textFontSize: action.payload,
      };

    default:
      return state;
  }
};

export default SongReducer;
