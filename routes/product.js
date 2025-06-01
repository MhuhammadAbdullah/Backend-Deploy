import express from "express";
import { PRODUCTS } from "../constant.js";

const router = express.Router();

// GET all products
router.get('/', (req, res) => {
    res.status(200).json(PRODUCTS);
});

// POST a new product
router.post('/', (req, res) => {
    const { name, price } = req.body;
    if (name && price) {
        const newProduct = { id: PRODUCTS.length + 1, name, price };
        PRODUCTS.push(newProduct);
        res.status(201).json({ message: "Product added", product: newProduct });
    } else {
        res.status(400).json({ message: "Name and Price required" });
    }
});

export default router;
