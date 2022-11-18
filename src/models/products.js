import mongoose from "mongoose";
const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 32,
      unique: true,
    },
    price: {
      type: Number,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      lowercase: true,
      unique: true,
      index: true,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
    },
    quantity: {
      type: Number,
      required: true,
    },

    color: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Color",
      },
    ],

    ratings: [{}],
    size: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Size",
      },
    ],
    category: {
      type: mongoose.Types.ObjectId,
      ref: "Category",
    },
  },
  { timestamps: true }
);
export default mongoose.model("Product", ProductSchema);
