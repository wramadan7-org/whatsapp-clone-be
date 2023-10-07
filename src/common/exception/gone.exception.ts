import { HttpStatus, HttpException } from '@nestjs/common';

export class GoneException extends HttpException {
  constructor(message?: string) {
    super(message || 'GONE', HttpStatus.GONE);
  }
}
