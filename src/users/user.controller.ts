import {
  Controller,
  HttpCode,
  HttpStatus,
  Body,
  Post,
  Param,
  ParseIntPipe,
  Delete,
  Get,
  NotFoundException,
  Patch,
  ConflictException,
} from '@nestjs/common';
import { UserService } from './user.service';
import { InternalServerErrorException } from 'src/common/exception/internalServerError.exception';
import { ResponseErrorDto, ResponseSuccessDto } from 'src/dto/global.dto';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';
import { UserEntity } from './user.entity';

@Controller('/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @HttpCode(201)
  async createUserController(@Body() createUserRequest: CreateUserDto) {
    try {
      await this.userService.createUserService(createUserRequest);

      const response: ResponseSuccessDto = {
        statusCode: HttpStatus.CREATED,
        message: 'Success create user',
        data: createUserRequest,
      };

      return response;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  @Get()
  @HttpCode(200)
  async findUsersController(): Promise<ResponseSuccessDto | any> {
    try {
      const users: UserEntity[] = await this.userService.findUsersService();

      const response: ResponseSuccessDto = {
        statusCode: HttpStatus.OK,
        message: 'List of user',
        data: users,
      };

      return response;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  @Get('/:id')
  @HttpCode(200)
  async findUserByIdController(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<ResponseSuccessDto | NotFoundException> {
    try {
      const user = await this.userService.findUserByIdService(id);

      if (!user) {
        throw new NotFoundException(`User with ID ${id} not found`);
      }

      const response: ResponseSuccessDto = {
        statusCode: HttpStatus.OK,
        message: `User with ID ${id}`,
        data: user,
      };

      return response;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  @Patch('/:id')
  @HttpCode(200)
  async updateUserController(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserRequest: UpdateUserDto,
  ): Promise<
    | ResponseSuccessDto
    | ResponseErrorDto
    | NotFoundException
    | ConflictException
  > {
    try {
      const update = await this.userService.updateUserService(
        id,
        updateUserRequest,
      );

      const response: ResponseSuccessDto = {
        statusCode: HttpStatus.OK,
        message: `User with ID ${id} successfully updated`,
        data: update,
      };

      return response;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  @Delete('/:id')
  @HttpCode(200)
  async deleteUserController(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<ResponseSuccessDto | any> {
    try {
      await this.userService.deleteUserService(id);

      const response: ResponseSuccessDto = {
        statusCode: HttpStatus.OK,
        message: `User with ID ${id} successfully deleted`,
      };

      return response;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
