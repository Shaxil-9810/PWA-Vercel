import { configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

import storage from "redux-persist/lib/storage"; // defaults to localStorage for the web

import { authReducer } from "./slices/UserSlice";

const rootReducer = combineReducers({
  auth: authReducer.reducer,
});
const persistConfig = {
  key: "main-root",
  storage,
  whitelist: ["UserSlice", "PlanSlice", "PaymentSlice"], // Names of the slices to persist
};
export const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
