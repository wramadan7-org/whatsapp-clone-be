import { HttpStatus, HttpException } from '@nestjs/common';

export class ServiceUnavailableException extends HttpException {
  constructor(message?: string) {
    super(message || 'SERVICE UNAVAILABLE', HttpStatus.SERVICE_UNAVAILABLE);
  }
}
