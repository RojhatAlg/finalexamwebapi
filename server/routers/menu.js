import express from "express";
const routerMenu = express.Router();
import createMenu from "../controllers/menuController.js";
routerMenu.post('/submit', createMenu);

export default routerMenu;
