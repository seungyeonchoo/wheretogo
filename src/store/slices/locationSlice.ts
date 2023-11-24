import { ILocation } from "@/utils/type";
import { createSlice } from "@reduxjs/toolkit";

const initialLocation: ILocation = { lat: 37.5734684, lng: 126.978984 };

const locationSlice = createSlice({
	name: "location",
	initialState: initialLocation,
	reducers: {
		handleLocation: (state, action) => (state = action.payload),
	},
});

export const { handleLocation } = locationSlice.actions;
export default locationSlice.reducer;
