import { UsernameExist, EmailExist, CreateUser } from "./User_DB";

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
