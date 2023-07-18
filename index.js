const express = require("express");
const cors = require("cors");
const routerApi = require("./routes");
const {
  boomErrorHandler,
  errorHandler,
  logErrors,
  ormErrorHandler,
} = require("./middlewares/error.handler");

const app = express();
const port = 3000;

app.use(express.json());

const whitelist = [
  "http://localhost:3000",
  "http://127.0.0.1:5500",
  "https://backend-zaiko.vercel.app",
];

const option = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("No Permitido"));
    }
  },
};

app.use(cors(option));

app.get("/", (req, res) => {
  res.send("Hola desde mi servidor en express");
});

routerApi(app);

app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log("Corriendo en el puerto: " + port);
});

module.exports = app;
