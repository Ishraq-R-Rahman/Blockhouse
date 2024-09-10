import { configureStore } from "@reduxjs/toolkit";
import chartReducer from "./chartSlice";

export const store = configureStore({
    reducer: {
        charts: chartReducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;