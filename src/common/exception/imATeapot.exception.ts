import { HttpStatus, HttpException } from '@nestjs/common';

export class ImATeapotException extends HttpException {
  constructor(message?: string) {
    super(message || 'I AM A TEAPOT', HttpStatus.I_AM_A_TEAPOT);
  }
}
