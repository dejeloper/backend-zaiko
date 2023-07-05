const express = require("express");
const routerApi = require("./routes");

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hola desde mi servidor en express");
});

routerApi(app);

app.listen(port, () => {
  console.log("Corriendo en el puerto: " + port);
});

module.exports = app;
