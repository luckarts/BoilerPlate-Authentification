import express from "express";
import { asyncHandler } from "../../helpers/asyncHandler";
import { signup } from "./auth_controller/signupController";
import { update_User, update_Password, create_Img, update_Img } from "./auth_controller/updateController";
import { deleteUser } from "./auth_controller/deleteUserController";
import passport from "passport";
import authenticate from "./authenticate";
import { generateJWT } from "../../Services/User/User_Services";
import { upload } from "../../helpers/multer.js";
const router = express.Router();


router.get("/", (req, res) => {
    res.json({ "message": "welcome on User api" });
});


router.get("/me", authenticate, (req, res) => {
    try {
        res.json(req.user);
    } catch (e) {
        res.status(500).json({ "error": "signUp failed" });
    }
});

router.post("/signup", asyncHandler(signup));
router.post("/img", upload, asyncHandler(create_Img));

router.post(
    "/signin",
    passport.authenticate("local", {
        "session": false
    }),
    (req, res) => {
        if (req.user.err) res.status(401).json({ "error": req.user.err });
        else {
            const token = generateJWT(req.user);
            res.status(200).json({ "user": req.user, token });
        }
    },
);

router.put("/update/:id", upload, asyncHandler(update_User));
router.put("/update/img/:id", upload, asyncHandler(update_Img));
router.put("/update/password/:id", upload, asyncHandler(update_Password));

router.delete("/delete/:username", asyncHandler(deleteUser));

export default router;
