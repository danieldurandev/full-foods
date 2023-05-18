const { Router } = require("express");
const { getDiets } = require("../../controllers");

const diets = Router();

diets.get("/", getDiets);

module.exports = {
  diets,
};
