import { Body, Controller, Post } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/User.dto";

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {

  }
  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto)
  }
}