import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        theme: true
        },
    reducers:{
        switchTheme: (state)=>{
            state.theme = !state.theme
        }
    }
})

export const { switchTheme} = themeSlice.actions;
export default themeSlice.reducer;