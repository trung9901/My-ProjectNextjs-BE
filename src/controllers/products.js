import Product from "../models/products";
import slugify from "slugify";
export const create = async (req, res) => {
  req.body.slug = slugify(req.body.name);
  try {
    const product = await new Product(req.body).save();
    console.log("product", product);
    res.json(product);
  } catch (error) {
    res.status(400).json({
      message: "create product failed",
    });
  }
};
export const gets = async (req, res) => {
  try {
    const products = await Product.find({}).sort({ createdAt: -1 }).exec();
    res.json(products);
  } catch (error) {
    res.status(400).json({
      message: "get products failed",
    });
  }
};
export const read = async (req, res) => {
  try {
    const product = await Product.findOne({ slug: req.params.slug }).exec();
    res.json(product);
  } catch (error) {
    res.status(400).json({
      message: "get product failed",
    });
  }
};
export const remove = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id).exec();
    res.json(product);
  } catch (error) {
    res.status(400).json({
      message: "remove product failed",
    });
  }
};
export const update = async (req, res) => {
  req.body.slug = slugify(req.body.name);
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    }).exec();
    res.json(product);
  } catch (error) {
    res.status(400).json({
      message: "update product failed",
    });
  }
};
export const get = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).exec();
    res.json(product);
  } catch (error) {
    res.status(400).json({
      message: "get product failed",
    });
  }
};
