const SongReducer = (state, action) => {
  switch (action.type) {
    case "SET_API_DATA":
      return {
        ...state,
        isLoading: false,
        allSongList: action.payload,
      };

    case "SET_FAVOURITE_DATA":
      return {
        ...state,
        isLoading: false,
        favouriteSongList: action.payload,
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
