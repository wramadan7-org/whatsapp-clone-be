import { HttpStatus, HttpException } from '@nestjs/common';

export class PayloadTooLarge extends HttpException {
  constructor(message?: string) {
    super(message || 'PAYLOAD TOO LARGE', HttpStatus.PAYLOAD_TOO_LARGE);
  }
}
