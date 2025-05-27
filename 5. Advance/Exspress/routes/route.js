const route = require("express").Router();
const todoRouter = require("./todo");

route.get("/", (req, res) => {
  res.send("Hello World!");
});

route.use("/todo", todoRouter);

route.get("/home", (req, res) => {
  res.send("ini halaman utama");
});

module.exports = route;
