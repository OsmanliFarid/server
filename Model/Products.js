import { model, Schema } from "mongoose";

const ProductsSchema = new Schema(
  {
    image: String,
    title: String,
    desc: String,
    price: String,
    color: [{ color: String }],
    size: [{ Size: String }],
    discounts: [{ discount: String, price: String }],
  },
  {
    versionKey: false,
  }
);

export const ProductModel = model("Products", ProductsSchema);
