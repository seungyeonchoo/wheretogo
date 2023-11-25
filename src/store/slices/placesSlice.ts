import { createSlice } from "@reduxjs/toolkit";

const initialPlaces: google.maps.places.PlaceResult[] = [];
const initailPagination: any = null;

const placesSlice = createSlice({
	name: "places",
	initialState: initialPlaces,
	reducers: {
		handlePlaces: (state, action) => (state = action.payload),
	},
});

export const { handlePlaces } = placesSlice.actions;
export default placesSlice.reducer;
