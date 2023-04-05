const SongReducer = (state, action) => {
  switch (action.type) {
    case "SET_API_DATA":
      return {
        ...state,
        isLoading: false,
        allSongList: action.payload,
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
      return { ...state, allSongList: songs };

    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    default:
      return state;
  }
};

export default SongReducer;
