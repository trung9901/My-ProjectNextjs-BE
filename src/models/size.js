import mongoose from "mongoose";
const SizeSchema = new mongoose.Schema(
  {
    size: {
      type: Number,
      required: true,
      unique: true,
    },
    quantity: {
      type: Number,
      minLength: 0,
      required: true,
      dèfault: 0,
    },
  },
  { timestamps: true }
);
export default mongoose.model("Size", SizeSchema);
