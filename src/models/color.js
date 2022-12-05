import mongoose from "mongoose";
const { ObjectId } = mongoose.Types;
const ColorSchema = new mongoose.Schema(
  {
    color: {
      type: String,
      required: true,
    },
    image: [
      {
        type: String,
      },
    ],
    size: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Size",
      },
    ],
  },
  { timestamps: true }
);
export default mongoose.model("Color", ColorSchema);
