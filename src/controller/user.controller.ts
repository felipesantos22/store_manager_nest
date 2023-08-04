import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserDto } from 'src/Dto/UserDto';
import { User } from 'src/entity/user';
import { UserService } from 'src/service/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get()
  findAllController(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Post()
  createController(@Body() user: UserDto) {
    return this.userService.createUser(user);
  }
}
