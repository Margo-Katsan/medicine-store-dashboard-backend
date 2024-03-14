import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "src/schemas/user.schema";
import { CreateUserDto } from "./dto/User.dto";

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>
  ) { }
  
  createUser(CreateUserDto: CreateUserDto) {
    const newUser = new this.userModel(CreateUserDto)
    return newUser.save()
  }

}