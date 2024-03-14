import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type ProductDocument = HydratedDocument<Product>

@Schema()
export class Product {
  @Prop()
  id: string

  @Prop()
  photo: string

  @Prop()
  name: string

  @Prop()
  suppliers: string

  @Prop()
  stock: string

  @Prop()
  price: string
  
  @Prop()
  category: string
}

export const ProductSchema = SchemaFactory.createForClass(Product)