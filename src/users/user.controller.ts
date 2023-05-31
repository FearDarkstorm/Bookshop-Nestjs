import { Controller, Get, Post,Body,Param } from '@nestjs/common';
import { UserServices } from './user.services';
import { CreateUserDto } from './CreateUser.dto';

@Controller('users')
export class userController {
    constructor(private userService: UserServices) {}

  //create user
  @Post('create')
  createUser(@Body() userdetail : CreateUserDto) {
    this.userService.addUser(userdetail);
    return 'user has been succesfully created'
  }
  //getAlluser
  @Get('all')
   async getUser() {
   const users = await this.userService.getUsers();
   return users; 
    
  }
}

