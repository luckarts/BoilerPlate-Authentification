import { UsernameExist, EmailExist, CreateUser } from "./User_DB";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

/*
Function checks if Email user already exists in database.
Returns user if this user already exist.
 */

export async function ValidUserExist(username, email) {
    if (!username) {
        throw new Error("username is empty");
    }
    if (!email) {
        throw new Error("email is empty");
    }
    let taken_username = null;
    let taken_email = null;

    if (username) {
        taken_username = await UsernameExist(username);
    }
    if (email) {
        taken_email = await EmailExist(email);
    }
    if (taken_username) {
        return taken_username;
    }
    if (taken_email) {
        return taken_email;
    }

    return null;
}

export async function CreateNewUser(args) {
    return await CreateUser(args);
}
/*
Function create token .
 */
export function generateJWT(user) {
    return jwt.sign(
        {
            user
        },
        process.env.JWT_SECRET
    );
}
