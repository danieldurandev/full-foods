const axios = require("axios");

const spoonacular = axios.create({
  baseURL: "https://api.spoonacular.com",
});

module.exports = spoonacular;
