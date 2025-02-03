import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/


// Här hade jag jätteproblem med att få det att fungera på både gh-pages och lokalt.
// När jag ändrat base till javascript2examination öppnades bara en vit sida och navbaren. Inte Home.
// Tillslut lyckades ChatGPT ordna denna lösning.

export default defineConfig({
  base: process.env.NODE_ENV === "production" ? "/javascript2examination/" : "/",
  plugins: [react()],
});