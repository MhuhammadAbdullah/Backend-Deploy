import express from "express";
import { USERS } from "../constant.js";

const router = express.Router();

// GET all users
router.get('/', (req, res) => {
    res.status(200).json(USERS);
});

// POST a new user
router.post('/', (req, res) => {
    const { name, email } = req.body;
    if (name && email) {
        const newUser = { id: USERS.length + 1, name, email };
        USERS.push(newUser);
        res.status(201).json({ message: "User added", user: newUser });
    } else {
        res.status(400).json({ message: "Name and Email required" });
    }
});

export default router;
