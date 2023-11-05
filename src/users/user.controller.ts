import { Controller, HttpCode, Body, Post } from '@nestjs/common';
import { UserService } from './user.service';
// import { Response } from 'express';
import { InternalServerErrorException } from 'src/common/exception/internalServerError.exception';
import { UserEntity } from './user.entity';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @HttpCode(201)
  async createUserController(@Body() createUserRequest: Partial<UserEntity>) {
    try {
      const createUser = await this.userService.createUserService(
        createUserRequest,
      );
      console.log('CREATE USER', createUser);

      const response = {
        statusCOde: 201,
        message: 'Success create user',
        data: createUserRequest,
      };

      return response;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
