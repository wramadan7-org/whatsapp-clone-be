import { HttpStatus, HttpException } from '@nestjs/common';

export class MethodNotAllowed extends HttpException {
  constructor(message?: string) {
    super(message || 'METHOD NOT ALLOWED', HttpStatus.METHOD_NOT_ALLOWED);
  }
}
