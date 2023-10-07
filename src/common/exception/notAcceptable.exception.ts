import { HttpStatus, HttpException } from '@nestjs/common';

export class NotAcceptableException extends HttpException {
  constructor(message?: string) {
    super(message || 'NOT ACCEPTABLE', HttpStatus.NOT_ACCEPTABLE);
  }
}
