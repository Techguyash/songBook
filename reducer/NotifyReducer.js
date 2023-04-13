const NotifyReducer = (state, action) => {
  switch (action.type) {
    case "ADD_NOTIFY":
      return {
        ...state,
        notifications: [...state.notifications, { ...action.payload }],
      };
    case "SET_NOTIFY":
      return {
        ...state,
        isLoading: false,
        notifications: action.payload,
      };
    case "DELETE_NOTIFY":
      const filteredData = state.notifications.filter((data) => {
        return data.id !== action.payload;
      });
      return {
        ...state,
        notifications: filteredData,
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

export default NotifyReducer;
