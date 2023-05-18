import axios from "axios";
import { setRecipes, stateOfCharge } from "./recipesSlice";

export const getAllRecipes = () => {
  return async (dispatch) => {
    const { data } = await axios.get("https://food-api-x3n1.onrender.com/recipes");
    dispatch(setRecipes(data.recipes));
  };
};

export const getRecipesByName = (query) => {
  return async (dispatch) => {
    dispatch(stateOfCharge());
    const { data } = await axios.get(
      `https://food-api-x3n1.onrender.com/recipes/name?query=${query}`
    );
    dispatch(setRecipes(data.recipes));
  };
};

// export const createRecipe = (recipe) => {
//   return async (dispatch) => {
//     const { data } = await axios.get(`http://localhost:3001/recipes`, recipe);
//     console.log();
//   };
// };
