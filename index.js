const express = require("express");
const cors = require("cors");
const routerApi = require("./routes");
const {
  boomErrorHandler,
  errorHandler,
  logErrors,
} = require("./middlewares/error.handler");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hola desde mi servidor en express");
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log("Corriendo en el puerto: " + port);
});

module.exports = app;
