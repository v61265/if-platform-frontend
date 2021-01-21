import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducer/userSlice";
import eventReducer from "./reducer/eventSlice";

export default configureStore({
  reducer: { 
  	user: userReducer,
  	event: eventReducer,
  },
});
