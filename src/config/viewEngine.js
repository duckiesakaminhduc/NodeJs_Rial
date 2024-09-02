var path = require("path");
const express = require("express");
const configViewEngine = (app) => {
  app.set("view engine", "ejs");
  app.set("views", path.join("./src", "views"));//config cho file views
  app.use(express.static(path.join("./src", "public")));//config cho img
};

module.exports = configViewEngine;
