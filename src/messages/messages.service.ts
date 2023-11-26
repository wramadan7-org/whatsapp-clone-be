import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MessageEntity } from './messages.entity';

@Injectable()
export class MessagesService {
  constructor(
    @InjectRepository(MessageEntity)
    private messageRepository: Repository<MessageEntity>,
  ) {}

  async createMessageService(messageData: Partial<MessageEntity>) {
    const message = this.messageRepository.create(messageData);
    return this.messageRepository.save(message);
  }
}
