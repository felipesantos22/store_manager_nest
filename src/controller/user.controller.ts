import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserDto } from 'src/Dto/UserDto';
import { User } from 'src/entity/user';
import { UserService } from 'src/service/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  createController(@Body() user: UserDto) {
    return this.userService.createUser(user);
  }

  @Get()
  findAllController(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Put(':id')
  updateController(@Param('id') id: number, @Body() user: UserDto) {
    return this.userService.updateUser(id, user);
  }

  @Delete(':id')
  deleteController(@Param('id') id: number){
    return this.userService.deleteUser(id);
  }

}
