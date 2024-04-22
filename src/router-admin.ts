import express, { Router } from "express";
const routerAdmin = Router();
import storeController from "./controllers/store.controller";
import productController from "./controllers/product.controller";

// Store
routerAdmin.get("/", storeController.goHome);

routerAdmin
  .get("/signup", storeController.getSignup)
  .post("/signup", storeController.processSignup);

routerAdmin
  .get("/login", storeController.getLogin)
  .post("/login", storeController.processLogin);
routerAdmin.get("/check-me", storeController.checkAuthSession);
routerAdmin.get("/logout", storeController.logout);

// Product
routerAdmin.get(
  "/product/all",
  storeController.verifyStore,
  productController.getAllProducts
);
routerAdmin.post(
  "/product/create",
  storeController.verifyStore,
  productController.createNewProduct
);
routerAdmin.post(
  "/product/:id",
  storeController.verifyStore,
  productController.updateChosenProduct
);

// User

export default routerAdmin;
