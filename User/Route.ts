import express from "express";
import UserController from "./Controller.ts";

const Routes = express.Router();

Routes.get("/getUserDetailsById", UserController.getUserDetailsById)

export default Routes;