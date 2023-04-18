import { createContext, useEffect, useReducer } from "react";
import { fetchAllNotification } from "../api/notification-http";
import reducer from "../reducer/NotifyReducer";
const INITIAL_STATE = {
  isError: false,
  notifications: [],
  addNotify: (data) => {},
  deleteNotify: (id) => {},
  getAllNotify: () => {},
};

export const NotifyContext = createContext({ ...INITIAL_STATE });

const NotifyCtxProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const addNotify = (data) => {
    dispatch({ type: "ADD_NOTIFY", payload: data });
  };

  const deleteNotify = (id) => {
    dispatch({ type: "DELETE_NOTIFY", payload: id });
  };

  const getAllNotify = async () => {
    try {
      dispatch({ type: "SET_LOADING" });
      const data = await fetchAllNotification();
      dispatch({ type: "SET_NOTIFY", payload: data });
    } catch (err) {
      dispatch({ type: "API_ERROR" });
      console.log(err);
    }
  };

  useEffect(() => {
    getAllNotify();
  }, []);

  const values = {
    ...state,
    addNotify: addNotify,
    deleteNotify: deleteNotify,
    getAllNotify: getAllNotify,
  };

  return (
    <NotifyContext.Provider value={values}>{children}</NotifyContext.Provider>
  );
};

export default NotifyCtxProvider;
