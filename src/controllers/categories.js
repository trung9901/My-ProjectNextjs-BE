import Category from "../models/categories";
import slugify from "slugify";
export const create = async (req, res) => {
  req.body.slug = slugify(req.body.name);
  try {
    const category = await new Category(req.body).save();
    res.json(category);
  } catch (err) {
    res.status(400).json({
      message: "create category failed",
    });
  }
};

export const gets = async (req, res) => {
  try {
    const categories = await Category.find({}).sort({ createdAt: -1 }).exec();
    res.json(categories);
  } catch (err) {
    res.status(400).json({
      message: "get categories failed",
    });
  }
};

export const read = async (req, res) => {
  try {
    const category = await Category.findOne({ slug: req.params.slug }).exec();
    res.json(category);
  } catch (err) {
    res.status(400).json({
      message: "get category failed",
    });
  }
};
export const remove = async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id).exec();
    res.json(category);
  } catch (err) {
    res.status(400).json({
      message: "remove category failed",
    });
  }
};
export const update = async (req, res) => {
  try {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    }).exec();
    res.json(category);
  } catch (err) {
    res.status(400).json({
      message: "update category failed",
    });
  }
};

export const get = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id).exec();
    res.json(category);
  } catch (err) {
    res.status(400).json({
      message: "get category failed",
    });
  }
};
