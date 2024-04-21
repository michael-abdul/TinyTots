import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";
import { LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";
const storeController: T = {};
const memberService = new MemberService();

storeController.goHome = (req: Request, res: Response) => {
  try {
    res.send("HomePage");
    console.log("HomePage");
  } catch (err) {
    console.log("Error homePage");
  }
};

storeController.getLogin = (req: Request, res: Response) => {
  try {
    res.send("getLogin");
    console.log("getLogin");
  } catch (err) {
    console.log("Error getLogin");
  }
};

storeController.getSignup = (req: Request, res: Response) => {
  try {
    res.send("getSignup");
    console.log("getSignup");
  } catch (err) {
    console.log("Error getSignup");
  }
};

storeController.processLogin = async (req: Request, res: Response) => {
  try {
    console.log("processLogin");
    const input: LoginInput = req.body;
    const result = await memberService.processLogin(input);
    res.send(result);
  } catch (err) {
    console.log("Error processLogin");
  }
};

storeController.processSignup = async (req: Request, res: Response) => {
  try {
    console.log("processSignup");
    const newMember: MemberInput = req.body;
    newMember.memberType = MemberType.STORE;
    const result = await memberService.processSignup(newMember);
    res.send(result);
  } catch (err) {
    console.log("Error processSignup");
  }
};

export default storeController;
