import { HttpStatus, HttpException } from '@nestjs/common';

export class PreconditionFailedException extends HttpException {
  constructor(message?: string) {
    super(message || 'PRECONDITION FAILED', HttpStatus.PRECONDITION_FAILED);
  }
}
