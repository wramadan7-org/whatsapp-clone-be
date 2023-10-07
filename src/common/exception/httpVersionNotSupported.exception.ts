import { HttpStatus, HttpException } from '@nestjs/common';

export class HttpVersionNotSupported extends HttpException {
  constructor(message?: string) {
    super(
      message || 'HTTP VERSION NOT SUPPORTED',
      HttpStatus.HTTP_VERSION_NOT_SUPPORTED,
    );
  }
}
