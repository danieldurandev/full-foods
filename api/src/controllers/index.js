const getAllRecipes = require("./Recipes/getAllRecipes");
const getRecipeById = require("./Recipes/getRecipeById");
const getRecipesByName = require("./Recipes/getRecipesByName");
const postRecipe = require("./Recipes/postRecipe");
const getDiets = require("./Diets/getDiets");

module.exports = {
  getAllRecipes,
  getRecipeById,
  postRecipe,
  getRecipesByName,
  getDiets,
};
