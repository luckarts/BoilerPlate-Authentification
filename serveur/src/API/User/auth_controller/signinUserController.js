
import passport from "passport";

export async function signIn(req, res, next) {

    passport.authenticate("local", {
        "session": false
    });
}
