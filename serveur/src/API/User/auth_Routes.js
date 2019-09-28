import express from "express";
import { asyncHandler } from "../../helpers/asyncHandler";
import { signup } from "./auth_Controller";

const router = express.Router();

// ACCESS middleware
router.get("/", (req, res) => {
    res.json({ "message": "welcome on User api" });
});
router.post("/signup", asyncHandler(signup));

export default router;
