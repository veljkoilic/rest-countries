import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./themeSlice";
import countrySlice from "./countrySlice";

export default configureStore({
    reducer:{
        theme: themeSlice,
        countries: countrySlice
    }
})