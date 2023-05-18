const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const middlewares = [
  bodyParser.urlencoded({ extended: true, limit: "50mb" }),
  bodyParser.urlencoded({ extended: true, limit: "50mb" }),
  bodyParser.json({ limit: "50mb" }),
  cookieParser(),
  morgan("dev"),
  (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Credentials", "true");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, DELETE"
    );
    next();
  },
];

module.exports = {
  middlewares,
};
