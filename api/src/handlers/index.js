const dietsInDatabase = require("./Database/dietsInDatabase");
const getDietsFromDB = require("./Diets/getDietsFromDB");
const getAllFromApi = require("./Recipes/getAllFromApi");
const getAllFromDB = require("./Recipes/getAllFromDB");
const getByIdFromApi = require("./Recipes/getByIdFromApi");
const getByIdFromDB = require("./Recipes/getByIdFromDB");
const getByNameFromApi = require("./Recipes/getByNameFromApi");
const getByNameFromDB = require("./Recipes/getByNameFromDB");
const postRecipeDB = require("./Recipes/postRecipeDB");

module.exports = {
  getAllFromApi,
  getAllFromDB,
  getByIdFromApi,
  getByIdFromDB,
  getByNameFromApi,
  getByNameFromDB,
  postRecipeDB,
  dietsInDatabase,
  getDietsFromDB,
};
