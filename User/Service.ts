import { Request } from "express"
import execute from "../Database/QueryWrapper.ts";

const UserService = {
    getUserDetailsById: async (req: Request) => {
        const id = +(req.query.id as string);
        const query: string = `select * from users where id = ?`
        const UserData = await execute(query, [id]);
        if (UserData) {
            return { success: true, result: UserData }
        }
        return { success: false, result: "Error while fetching the details of users" }
    }
};

export default UserService;