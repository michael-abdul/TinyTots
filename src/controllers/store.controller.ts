import { Request, Response } from "express";
import { T } from "../libs/types/common";
import {} from "../models/Member.service";
const storeController: T = {};
storeController.goHome = (req: Request, res: Response) => {
  try {
    res.send("HomePage");
  } catch (err) {
    console.log("Error homePage");
  }
};

storeController.getLogin = (req: Request, res: Response) => {
  try {
    res.send("getLogin");
  } catch (err) {
    console.log("Error getLogin");
  }
};

storeController.getSignup = (req: Request, res: Response) => {
  try {
    res.send("getSignup");
  } catch (err) {
    console.log("Error getSignup");
  }
};

export default storeController;
