// import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
    name: 'home',
    initialState: {
        url: {name: "manish"},
        generes: {},
    },
    reducers: {
        getApiConfiguration: (state, action) => {
            state.url = action.payload;
            console.log(state.url, "state.url");
            console.log(action.payload, "action.payload");
        },
        getGenres: (state, action) => {
            state.generes = action.payload;
        },
    },
});

export const { getApiConfiguration, getGenres } = homeSlice.actions;

export default homeSlice.reducer;