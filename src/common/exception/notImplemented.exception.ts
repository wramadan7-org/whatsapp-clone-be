import { HttpStatus, HttpException } from '@nestjs/common';

export class NotImplementedException extends HttpException {
  constructor(message?: string) {
    super(message || 'NOT IMPLEMENTED', HttpStatus.NOT_IMPLEMENTED);
  }
}
