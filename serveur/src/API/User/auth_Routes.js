import express from "express";
import { asyncHandler } from "../../helpers/asyncHandler";
import { signup, deleteUser } from "./auth_Controller";

const router = express.Router();

router.get("/", (req, res) => {
    res.json({ "message": "welcome on User api" });
});

router.post("/signup", asyncHandler(signup));
router.delete("/delete/:username", asyncHandler(deleteUser));
export default router;
