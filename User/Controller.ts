import { Response, Request, NextFunction } from "express";
import UserService from "./Service.ts";

const UserController = {
    getUserDetailsById: async (request: Request, response: Response, next: NextFunction) => {
        try {
            const result = await UserService.getUserDetailsById(request);
            response.json(result);
        } catch (e) {
            next(e);
        }
    }
};

export default UserController;
