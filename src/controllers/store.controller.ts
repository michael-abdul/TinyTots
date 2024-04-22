import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";
import { AdminRequest, LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";
import Errors from "../libs/Errors";
const storeController: T = {};
const memberService = new MemberService();

storeController.goHome = (req: Request, res: Response) => {
  try {
    res.render("home");
    console.log("HomePage");
  } catch (err) {
    console.log("Error homePage");
  }
};

storeController.getLogin = (req: Request, res: Response) => {
  try {
    res.render("login");
    console.log("getLogin");
  } catch (err) {
    console.log("Error getLogin");
  }
};

storeController.getSignup = (req: Request, res: Response) => {
  try {
    res.render("signup");
    console.log("getSignup");
  } catch (err) {
    console.log("Error getSignup");
  }
};

storeController.processLogin = async (req: AdminRequest, res: Response) => {
  try {
    console.log("processLogin");
    const input: LoginInput = req.body;
    const result = await memberService.processLogin(input);
    // TODO SESSIONS AUTHENTICATION

    req.session.member = result;
    req.session.save(function () {
      res.send(result);
    });
  } catch (err) {
    console.log("Error signup", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

storeController.processSignup = async (req: AdminRequest, res: Response) => {
  try {
    console.log("processSignup");
    const newMember: MemberInput = req.body;
    newMember.memberType = MemberType.STORE;
    const result = await memberService.processSignup(newMember);
    // TODO SESSIONS AUTHENTICATION

    req.session.member = result;
    req.session.save(function () {
      res.send(result);
    });
  } catch (err) {
    console.log("Error signup", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

export default storeController;
