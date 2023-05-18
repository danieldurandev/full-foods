import { createSlice } from "@reduxjs/toolkit";

export const recipesSlice = createSlice({
  name: "recipes",
  initialState: {
    recipesAll: [],
    recipePage: [],
    currentPage: 1,
    totalPages: 0,
    isLoading: true,
  },
  reducers: {
    setRecipes: (state, action) => {
      state.recipesAll = action.payload;
      state.recipePage = state.recipesAll.slice(0, 9);
      state.totalPages = Math.ceil(state.recipesAll.length / 9);
      state.isLoading = false;
    },

    stateOfCharge: (state) => {
      state.isLoading = !state.isLoading;
    },

    recipeFilters: (state, { payload }) => {
      state.recipesAll = payload;
      state.recipePage = state.recipesAll.slice(0, 9);
      state.totalPages = Math.ceil(state.recipesAll.length / 9);
    },

    nextPage: (state) => {
      if (state.currentPage < state.totalPages) {
        state.currentPage += 1;
        state.recipePage = state.recipesAll.slice(
          9 * (state.currentPage - 1),
          9 * state.currentPage
        );
      }
    },
    selectePage: (state, { payload }) => {
      if (payload === 1) {
        state.currentPage = 1;
        state.recipePage = state.recipesAll.slice(0, 9);
      } else {
        state.currentPage = payload;
        state.recipePage = state.recipesAll.slice(
          9 * (state.currentPage - 1),
          9 * state.currentPage
        );
      }
    },
    previousPage: (state) => {
      if (state.currentPage >= 1) {
        if (state.currentPage === 1) {
          state.currentPage = 1;
        } else {
          state.currentPage -= 1;
          state.recipePage = state.recipesAll.slice(
            9 * (state.currentPage - 1),
            9 * state.currentPage
          );
        }
      }
    },
  },
});

export const {
  setRecipes,
  nextPage,
  previousPage,
  selectePage,
  stateOfCharge,
  recipeFilters,
} = recipesSlice.actions;
