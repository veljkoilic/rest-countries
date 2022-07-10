import { createSlice } from "@reduxjs/toolkit";

const countrySlice = createSlice({
  name: "countries",
  initialState: {
    countries: [],
    filteredCountries: [],
    currentCountry: {},
  },
  reducers: {
    addCountries: (state, actions) => {
      state.countries = actions.payload
    },
    filterCountries: (state, actions) => {
        state.filteredCountries = state.countries.filter( c => c.region === actions.payload)
      },
    setCountry: (state, actions) => {
      state.currentCountry = actions.payload;
    },
  },
});

export const { addCountries, setCountry, filterCountries} = countrySlice.actions;
export default countrySlice.reducer;
