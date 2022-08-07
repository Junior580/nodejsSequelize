const { Router } = require("express");
const userController = require("../controllers/userController");

const routes = Router();

routes.get("/", userController.get);
routes.post("/", userController.postUser);

module.exports = routes;
