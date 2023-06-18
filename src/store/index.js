import { configureStore } from "@reduxjs/toolkit";
import { UserSlice } from './user/userSlice';

export const store = configureStore({
  reducer: {
    user: UserSlice.reducer,
  },
});
