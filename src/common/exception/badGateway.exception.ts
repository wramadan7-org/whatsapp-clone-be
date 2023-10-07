import { HttpStatus, HttpException } from '@nestjs/common';

export class BadGatewayException extends HttpException {
  constructor(message?: string) {
    super(message || 'BAD GATEWAY', HttpStatus.BAD_GATEWAY);
  }
}
