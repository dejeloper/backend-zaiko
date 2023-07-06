const express = require("express");
const routerApi = require("./routes");
const { logError, errorHandler } = require("./middlewares/error.handler");

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hola desde mi servidor en express");
});

routerApi(app);

app.use(logError);
app.use(errorHandler);

app.listen(port, () => {
  console.log("Corriendo en el puerto: " + port);
});

module.exports = app;
