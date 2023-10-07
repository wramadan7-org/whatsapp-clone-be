import { HttpStatus, HttpException } from '@nestjs/common';

export class RequestTimeoutException extends HttpException {
  constructor(message?: string) {
    super(message || 'REQUEST TIMEOUT', HttpStatus.REQUEST_TIMEOUT);
  }
}
