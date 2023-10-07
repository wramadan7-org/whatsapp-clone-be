import { HttpStatus, HttpException } from '@nestjs/common';

export class UnprocessableEntityException extends HttpException {
  constructor(message?: string) {
    super(message || 'UNPROCESSABLE ENTITY', HttpStatus.UNPROCESSABLE_ENTITY);
  }
}
