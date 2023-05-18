const server = require("./src/app.js");
const { connection } = require("./src/db.js");
const dietsInDatabase = require("./src/handlers/Database/dietsInDatabase.js");

(async function startBackend() {
  await connection.sync({ force: true });
  server.listen(3001, () => {
    console.log("Servidor y base de datos en funcionamiento");
  });
   await dietsInDatabase();
})();
