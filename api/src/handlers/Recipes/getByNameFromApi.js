const spoonacular = require("../../api/spoonacularApi");
const recipeMapping = require("../../helpers/recipeMapping");
require("dotenv").config();

const { API_KEY } = process.env;
// Esta funcion obtiene de la API las recetas filtradas por nombre
const getByNameFromApi = async (query) => {
  try {
    const { data } = await spoonacular.get(
      `/recipes/complexSearch?apiKey=${API_KEY}&query=${query}&number=100&offset=0&addRecipeInformation=true`
    );
    //Envia un arregllo de recetas filtrados por nombre de la receta
    const { results, offset, number, totalResults } = data;
    const recipes = recipeMapping(results);
    return recipes;
  } catch (error) {
    console.log(error.message);
    throw new Error("getByNameFromApi");
  }
};

module.exports = getByNameFromApi;
