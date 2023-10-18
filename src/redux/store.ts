import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { latestApi } from "./Services/TopHeadlinesApi/TopHeadlinesApi";
import { everythingApi } from "./Services/EverythingApi/EverythingApi";

const store = configureStore({
  reducer: {
    [latestApi.reducerPath]: latestApi.reducer,
    [everythingApi.reducerPath]: everythingApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(latestApi.middleware)
      .concat(everythingApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
