import express, { Router } from "express";
const routerAdmin = Router();
import storeController from "./controllers/store.controller";
routerAdmin.get("/", storeController.goHome);
routerAdmin.get("/signup", storeController.getSignup);
routerAdmin.get("/login", storeController.getLogin);

export default routerAdmin;
