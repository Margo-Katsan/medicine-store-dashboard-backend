import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type OrderDocument = HydratedDocument<Order>

@Schema()
export class Order {
  @Prop()
  photo: string

  @Prop()
  name: string

  @Prop()
  address: string

  @Prop()
  products: string

  @Prop()
  price: string
  
  @Prop()
  status: string
}

export const OrderSchema = SchemaFactory.createForClass(Order)