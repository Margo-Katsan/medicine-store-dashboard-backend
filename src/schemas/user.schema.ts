import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type SupplierDocument = HydratedDocument<User>

@Schema()
export class User {
  @Prop()
  username: string
}

export const UserSchema = SchemaFactory.createForClass(User)