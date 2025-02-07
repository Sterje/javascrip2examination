// Importera creatSlice som vi skapar reducer med
import { createSlice } from "@reduxjs/toolkit";

// Förvalt tema blir dark
const initialState = {
    theme: "dark",
};

// En slice themeSlice skapas för att hantera temat
const themeSlice = createSlice({
    name: "theme", // Sätter namnet på slicen till theme
    initialState,  
    reducers: {
        // Definerar reducers till funktionen toggleTheme som växlar tema mellan light och dark
        toggleTheme: (state) => {
            // Sätter state till light eller dark
            state.theme = state.theme === "light" ? "dark" : "light";
            // Sätter className till body beroende på aktuellt tema
            document.body.className = state.theme;
        },
    },
});

// Exporterar toggleTheme för att kunna användas i applikationen
export const { toggleTheme } = themeSlice.actions;

// Exporterar reducer funktionen
export default themeSlice.reducer;
