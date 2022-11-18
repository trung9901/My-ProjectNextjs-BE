import Size from "../models/size";

export const create = async (req, res) => {
  console.log(req.body);
  try {
    const size = await new Size(req.body).save();

    res.json(size);
  } catch (error) {
    res.status(400).json({
      message: "create size failed",
    });
  }
};

export const gets = async (req, res) => {
  try {
    const size = await Size.find({}).sort({ createdAt: -1 }).exec();
    res.json(size);
  } catch (error) {
    res.status(400).json({ message: "get size failed" });
  }
};
export const remove = async (req, res) => {
  try {
    const size = await Size.findByIdAndDelete(req.params.id).exec();
    res.json(size);
  } catch (error) {
    res.status(400).json({ message: "remove size failed" });
  }
};
export const update = async (req, res) => {
  try {
    const size = await Size.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    }).exec();
    res.json(size);
  } catch (error) {
    res.status(400).json({ message: "update size failed" });
  }
};
export const get = async (req, res) => {
  try {
    const size = await Size.findById(req.params.id).exec();
    res.json(size);
  } catch (error) {
    res.status(400).json({ message: "get size failed" });
  }
};
