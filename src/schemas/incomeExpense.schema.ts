import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type incomeExpenseDocument = HydratedDocument<IncomeExpense>

@Schema()
export class IncomeExpense {
  @Prop()
  name: string

  @Prop()
  amount:string
}

export const IncomeExpenseSchema = SchemaFactory.createForClass(IncomeExpense)