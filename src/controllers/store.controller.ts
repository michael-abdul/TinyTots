import { NextFunction, Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";
import { AdminRequest, LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";
import Errors, { Message } from "../libs/Errors";
const storeController: T = {};
const memberService = new MemberService();

storeController.goHome = (req: Request, res: Response) => {
  try {
    res.render("home");
    console.log("HomePage");
  } catch (err) {
    console.log("Error homePage");
    res.redirect("/admin");
  }
};

storeController.getLogin = (req: Request, res: Response) => {
  try {
    res.render("login");
    console.log("getLogin");
  } catch (err) {
    console.log("Error getLogin");
    res.redirect("/admin");
  }
};

storeController.getSignup = (req: Request, res: Response) => {
  try {
    res.render("signup");
    console.log("getSignup");
  } catch (err) {
    console.log("Error getSignup");
    res.redirect("/admin");
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
    const message =
      err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
    res.send(
      `<script> alert("${message}"); window.location.replace('admin/signup')</script> `
    );
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
    const message =
      err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
    res.send(
      `<script> alert("${message}"); window.location.replace('admin/signup')</script> `
    );
  }
};

storeController.checkAuthSession = async (req: AdminRequest, res: Response) => {
  try {
    console.log("checkAuthSession");
    if (req.session?.member)
      res.send(`<script> alert("${req.session.member.memberNick}")</script>`);
    else res.send(`<script> alert ("${Message.NOT_AUTHENTICATED}")</script>`);
  } catch (err) {
    console.log("Error signup", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

storeController.logout = async (req: AdminRequest, res: Response) => {
  try {
    req.session.destroy(function () {
      res.redirect("/admin");
    });
  } catch (err) {
    console.log("Error, logout", err);
    res.redirect("/admin");
  }
};

storeController.verifyStore = async (
  req: AdminRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    if (req.session?.member?.memberType === MemberType.STORE) {
      req.member = req.session.member;
      next();
    }
  } catch (err) {
    const message = Message.NOT_AUTHENTICATED;
    res.send(
      `<script> alert("${message}"); window.location.replace('/admin/login');</script>`
    );
  }
};

export default storeController;
