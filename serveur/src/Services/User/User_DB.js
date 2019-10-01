import db from "../../Database/models";

// function to check if firstname already existe in db

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
// function to check if email already existe in db

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

// Select * from Permission where i = 1 Limit 1

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
