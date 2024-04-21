import MemberService from "../models/Member.service";
import { T } from "../libs/types/common";
import { Request, Response } from "express";
import { MemberInput, Member, LoginInput } from "../libs/types/member";
import Errors from "../libs/Errors";
const memberController: T = {};
const memberService = new MemberService();
memberController.getStore = (req: Request, res: Response) => {
  try {
    res.send("StorePage");
  } catch (err) {
    console.log("Error getStore", err);
  }
};
memberController.signup = async (req: Request, res: Response) => {
  try {
    console.log("signup");

    const input: MemberInput = req.body,
      result: Member = await memberService.signup(input);

    //TOKEN
    res.json({ member: result });
  } catch (err) {
    console.log("Error signup", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

memberController.login = async (req: Request, res: Response) => {
  try {
    console.log("login");

    const input: LoginInput = req.body,
      result = await memberService.login(input);
    res.json({ member: result });
  } catch (err) {
    console.log("Error signup", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

export default memberController;
