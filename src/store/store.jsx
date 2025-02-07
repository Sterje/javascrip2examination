import { configureStore } from "@reduxjs/toolkit"; //Importerar configureStore för att skapa en store med Redux
import themeReducer from "./themeSlice"; // Importerar themeReducer från themeSlice som hantera temaväxlaren

export const store = configureStore({ // Skapar store
    reducer: {
        theme: themeReducer, // Kopplar themeReducer  till nyckeln theme
    },
});
