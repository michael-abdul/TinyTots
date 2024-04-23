import mongoose, { Schema } from "mongoose";
import {
  ProductAge,
  ProductCollection,
  ProductLearn,
  ProductStatus,
} from "../libs/enums/product.enum";

const productSchema = new Schema(
  {
    productStatus: {
      type: String,
      enum: ProductStatus,
      default: ProductStatus.PAUSE,
    },
    productCollection: {
      type: String,
      enum: ProductCollection,
      required: true,
    },
    productName: {
      type: String,
      required: true,
    },
    productPrice: {
      type: Number,
      required: true,
    },
    productLeftCount: {
      type: Number,
      required: true,
    },
    productAge: {
      type: String,
      enum: ProductAge,
      default: ProductAge.THREE_YEARS,
    },
    productLearn: {
      type: String,
      enum: ProductLearn,
      default: ProductLearn.EDU_GAMES,
    },
    productDesc: {
      type: String,
      required: true,
    },
    productImages: {
      type: [String],
      default: [],
    },
    productViews: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true } //updatedAt, createdAt
);
productSchema.index(
  { productName: 1, productAge: 1, productLearn: 1 },
  { unique: true }
);
export default mongoose.model("Product", productSchema);
