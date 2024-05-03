import { ObjectId } from "mongoose";
import {
  ProductAge,
  ProductCollection,
  ProductLearn,
  ProductStatus,
} from "../enums/product.enum";

export interface Product {
  _id: ObjectId;
  productStatus: ProductStatus;
  productCollection: ProductCollection;
  productName: string;
  productPrice: number;
  productLeftCount: number;
  productAge: ProductAge;
  productLearn: ProductLearn;
  productDesc?: string;
  productImages: string[];
  productViews: number;
}

export interface ProductInput {
  productStatus?: ProductStatus;
  productCollection: ProductCollection;
  productName: string;
  productPrice: number;
  productLeftCount: number;
  productAge: ProductAge;
  productLearn: ProductLearn;
  productDesc?: string;
  productImages?: string[];
  productViews?: number;
}
export interface ProductUpdateInput {
  _id: ObjectId;
  productStatus?: ProductStatus;
  productCollection?: ProductCollection;
  productName?: string;
  productPrice?: number;
  productLeftCount?: number;
  productAge?: ProductAge;
  productLearn?: ProductLearn;
  productDesc?: string;
  productImages?: string[];
  productViews?: number;



}