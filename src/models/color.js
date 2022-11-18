import mongoose from "mongoose";
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
  },
  { timestamps: true }
);
export default mongoose.model("Color", ColorSchema);
