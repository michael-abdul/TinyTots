import express, { Router } from "express";
const routerAdmin = Router();
import storeController from "./controllers/store.controller";

// Store
routerAdmin.get("/", storeController.goHome);

routerAdmin
  .get("/signup", storeController.getSignup)
  .post("/signup", storeController.processSignup);

routerAdmin
  .get("/login", storeController.getLogin)
  .post("/login", storeController.processLogin);

// Product

// User

export default routerAdmin;
