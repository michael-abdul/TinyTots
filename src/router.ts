import express, { Router } from "express";
const router = Router();
import memberController from "./controllers/member.controller";
import uploader from "./libs/utils/uploader";
import productController from "./controllers/product.controller";

/** Member */
router.get("/member/store", memberController.getStore);
router.post("/member/login", memberController.login);
router.post("/member/signup", memberController.signup);
router.post(
  "/member/logout",
  memberController.verifyAuth,
  memberController.logout
);
router.get(
  "/member/detail",
  memberController.verifyAuth,
  memberController.getMemberDetail
);
router.post(
  "/member/update",
  memberController.verifyAuth,
  uploader("members").single("memberImage"),
  memberController.updateMember
);
router.get(
  "/member/top-users",
  memberController.verifyAuth,
  memberController.getTopUsers
);

/* Product*/
router.get("/product/all",productController.getProducts)
router.get("/product/:id",memberController.retrieveAuth,productController.getProduct)

/* Order */

export default router;
