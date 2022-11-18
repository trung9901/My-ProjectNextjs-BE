import mongoose from "mongoose";
const SizeSchema = new mongoose.Schema(
  {
    size: {
      type: Number,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);
export default mongoose.model("Size", SizeSchema);
