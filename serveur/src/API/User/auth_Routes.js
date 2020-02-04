import express from "express";
import { asyncHandler } from "../../helpers/asyncHandler";
import { signup } from "./auth_controller/signupController";
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
})

router.post("/signup", asyncHandler(signup));

router.post(
    "/signin",
    passport.authenticate("local", {
        "failWithError": true,
        "failureFlash": true,
        "session": false
    }),
    function (req, res) {
        const token = generateJWT(req.user);
        res.status(200).json({ "user": req.user, token });
    },
    function (err, req, res, next) {
        return res.status(401).send({ "error": err });
    }
);
router.delete("/delete/:username", asyncHandler(deleteUser));

export default router;
