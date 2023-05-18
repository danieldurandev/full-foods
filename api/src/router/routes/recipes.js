const { Router } = require("express");
const {
  getRecipesByName,
  getRecipeById,
  getAllRecipes,
  postRecipe,
} = require("../../controllers");

const recipes = Router();

// localhost:3001/recipes/name
recipes.get("/name", getRecipesByName);

// localhost:3001/recipes/:idRecipe
recipes.get("/:idRecipe", getRecipeById);

// localhost:3001/recipes
recipes.get("/", getAllRecipes);

// localhost:3001/recipes
recipes.post("/", postRecipe);

module.exports = {
  recipes,
};
