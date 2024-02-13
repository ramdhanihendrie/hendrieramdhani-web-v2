import { configureStore } from "@reduxjs/toolkit";
import landingSlice from "./features/landingSlice";

export const store = configureStore({
  reducer: {
    landing: landingSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;