import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  InternalServerErrorException,
  Post,
} from '@nestjs/common';
import { MessagesService } from './messages.service';
import { ResponseSuccessDto } from 'src/dto/global.dto';
import { CreateMessageDto } from './dto/messages.dto';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messageService: MessagesService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createMessageController(
    @Body()
    createMessageRequest: CreateMessageDto,
  ) {
    try {
      const createMessage = await this.messageService.createMessageService(
        createMessageRequest,
      );
      const response: ResponseSuccessDto = {
        statusCode: HttpStatus.CREATED,
        message: 'Success create message',
        data: createMessage,
      };

      return response;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
