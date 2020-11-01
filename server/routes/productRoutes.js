import express from "express";
import Product from "../models/productModel.js";
import asyncHandler from "express-async-handler";

const router = express.Router();

//  @des      Fetch all products
//  @route     GET / api/products
//  @access    Public
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

//  @des      Fetch all products
//  @route     GET / api/products
//  @access    Public
// Single product using id

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "product not founf" });
    }
  })
);

export default router;
