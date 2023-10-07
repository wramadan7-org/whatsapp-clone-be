import { HttpStatus, HttpException } from '@nestjs/common';

export class GatewayTimeoutException extends HttpException {
  constructor(message?: string) {
    super(message || 'GATEWAY TIMEOUT', HttpStatus.GATEWAY_TIMEOUT);
  }
}
