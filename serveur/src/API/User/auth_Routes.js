import express from "express";
import { asyncHandler } from "../../helpers/asyncHandler";
import { signup } from "./auth_controller/signupController";
import { update_User, update_Password } from "./auth_controller/updateController";
import { deleteUser } from "./auth_controller/deleteUserController";
import passport from "passport";
import authenticate from "./authenticate";
import { generateJWT } from "../../Services/User/User_Services";

const router = express.Router();


router.get("/", (req, res) => {
    res.json({ "message": "welcome on User api" });
});


router.get("/me", authenticate, (req, res) => {
    try {
        res.json(req.user);
    } catch (e) {
        res.status(500).json({ "flash": "signUp failed" });
    }
});

router.post("/signup", asyncHandler(signup));

router.post(
    "/signin",
    passport.authenticate("local", {
        "failWithError": true,
        "failureFlash": true,
        "session": false
    }),
    (req, res) => {
        const token = generateJWT(req.user);

        res.status(200).json({ "user": req.user, token });
    },
    (err, req, res) => {
        return res.status(401).send({ "error": err });
    }
);

router.put("/update/:id", asyncHandler(update_User));
router.put("/update/password/:id", asyncHandler(update_Password));

router.delete("/delete/:username", asyncHandler(deleteUser));

export default router;
