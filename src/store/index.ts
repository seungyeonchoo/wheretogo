import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import locationSlice from "./slices/locationSlice";

export const rootReducer = combineReducers({
	location: locationSlice,
});

const store = configureStore({
	reducer: rootReducer,
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type ReducerType = ReturnType<typeof rootReducer>;
