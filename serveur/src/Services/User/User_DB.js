import db from "../../Database/models";
import Sequelize from 'sequelize';

const Op = Sequelize.Op;

/*
Function checks if username already exists in database.
Returns user if username already taken.
 */
export async function usernameExist(username) {
    if (username === undefined || username === null) {
        throw new Error("no username was passed on db ");
    }

    const user = await db.User.findOne({
        "where": { username }
    });

    if (user) {
        return user;
    }

    return null;
}
export async function findUserImg(id) {


    const userImg = await db.UserImg.findOne({
        "where": { id }
    });

    if (userImg) {
        return userImg;
    }

    return null;
}

/*
Function checks if Email already exists in database.
Returns user if email already taken.
 */

export async function emailExist(email) {
    if (email === undefined || email === null) {
        throw new Error("no email was passed on db ");
    }

    const user = await db.User.findOne({
        "where": { "email": email }
    });

    if (user) {
        return user;
    }

    return null;
}
// Select * from email where i = 1 Limit 1



// Select * from Permission where i = 1 Limit 1

export async function validePermissionId(PermissionId) {
    const permission = db.Permission.findOne({ "where": { "id": PermissionId } });

    if (permission) {
        return permission;
    }

    return null;
}

/*
Function checks create User in database.
Returns user .
 */

export async function createUser(args) {
    if (!args.username) {
        throw new Error("invalid argument username");
    }
    if (!args.email) {
        throw new Error("invalid argument email");
    }
    if (!args.password) {
        throw new Error("invalid argument password");
    }
    if (!args.PermissionId) {
        args.PermissionId = 2;
    }
    const permission = await validePermissionId(args.PermissionId);

    if (!permission) {
        throw new Error("permission not find");
    }
    const user = await db.User.create({
        "username": args.username,
        "password": args.password,
        "email": args.email,
        "PermissionId": args.PermissionId
    });

    return user;
}
export async function findUserIdOrFirstname(params) {
    if (!params) throw new Error("invalid argument: id");

    const user = await db.User.findOne({
        "where": {
            [Op.or]: [{ "email": params }, { "username": params }]
        }
    });

    if (user) return user;

    return null;
}
/*
Function delete User with username as params
 */
export async function deleteUserID(username) {
    if (!username) {
        throw new Error("invalid argument: id");
    }
    const user = await db.User.destroy({
        "where": {
            username
        }
    });

    return null;
}

export async function updateUser(args) {
    if (args.newImage) {
        await db.UserImg.update({ path: args.newImage }, { "returning": true, "where": { "id": args.id } })
    }
    const user = await db.User.update({
        "username": args.username,
        "email": args.email,
        "password": args.newPassword
    }, { "returning": true, "where": { "id": args.id } });

    return user;
}

export async function updatePassword(args) {

    if (args.password && !args.newPassword)
        throw new Error("please enter new password");

    if (args.password && args.newPassword && !args.confirmPassword)
        throw new Error("please confirm  new password");

    const user = await db.User.update({
        "password": args.newPassword
    }, { "returning": true, "where": { "id": args.id } });

    return user;
}
