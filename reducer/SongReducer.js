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
        allSongList: updatedAllSongList, // error in this line code
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

    case "SET_FAVOURITE_LIST":
      return {
        ...state,
        filteredList: action.payload,
      };

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
