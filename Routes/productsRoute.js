import { Router } from "express";
import {
  AllProducts,
  AllProductsId,
  ProductsPost,
} from "../Controller/Product/Products.js";
const productsRoute = new Router();

productsRoute.get("/", AllProducts);
productsRoute.post("/", ProductsPost);
productsRoute.get("/:id", AllProductsId);

export default productsRoute;
