import db from "../../Database/models";

/*
Function checks if username already exists in database.
Returns user if username already taken.
 */
export async function UsernameExist(username) {
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

/*
Function checks if Email already exists in database.
Returns user if email already taken.
 */

export async function EmailExist(email) {
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

// Select * from Permission where i = 1 Limit 1

export async function ValidePermissionId(PermissionId) {
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

export async function CreateUser(args) {
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
    const permission = await ValidePermissionId(args.PermissionId);

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
