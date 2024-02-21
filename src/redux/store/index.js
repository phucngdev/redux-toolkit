import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "../useSlice/usersSlice";

export const store = configureStore({
  reducer: {
    users: usersSlice,
  },
});
