import express from "express";
import { signup, login, logout, update } from "../controllers/auth.controller.js";
import { arcjetProtection } from "../models/arcjet.middleware.js";

const router = express.Router();

router.use(arcjetProtection)

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

router.post("/update", update);

// testing
router.get("/test", (req, res) => {
    res.status(200).json({message: "test for limit"})
})

export default router;
