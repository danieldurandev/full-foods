import { recipesSlice } from "./recipes/recipesSlice";

const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
  reducer: {
    recipes: recipesSlice.reducer,
  },
});
