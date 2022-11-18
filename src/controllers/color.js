import Color from "../models/color";
export const create = async (req, res) => {
  try {
    const color = await new Color(req.body).save();
    res.json(color);
  } catch (error) {
    res.status(400).json({
      message: "create color failed",
    });
  }
};
export const gets = async (req, res) => {
  try {
    const color = await Color.find({}).sort({ createdAt: -1 }).exec();
    res.json(color);
  } catch (error) {
    res.status(400).json({ message: "get color failed" });
  }
};
export const remove = async (req, res) => {
  try {
    const color = await Color.findByIdAndDelete(req.params.id).exec();
    res.json(color);
  } catch (error) {
    res.status(400).json({ message: "remove color failed" });
  }
};
export const update = async (req, res) => {
  try {
    const color = await Color.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    }).exec();
    res.json(color);
  } catch (error) {
    res.status(400).json({ message: "update color failed" });
  }
};
export const get = async (req, res) => {
  try {
    const color = await Color.findById(req.params.id).exec();
    res.json(color);
  } catch (error) {
    res.status(400).json({ message: "get color failed" });
  }
};
