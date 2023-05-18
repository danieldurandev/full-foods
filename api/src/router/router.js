const { Router } = require("express");
const { recipes, diets } = require("./routes");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

router.use("/recipes", recipes);
router.use("/diets", diets);

module.exports = router;
