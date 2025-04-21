import { configureStore } from "@reduxjs/toolkit";
import leadsReducer from "./leadsSlice";
import teamReducer from "./teamSlice";

export const store = configureStore({
  reducer: {
    leads: leadsReducer,
    team: teamReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;