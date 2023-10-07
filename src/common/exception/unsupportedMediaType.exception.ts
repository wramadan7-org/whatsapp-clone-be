import { HttpStatus, HttpException } from '@nestjs/common';

export class UnsupportedMediaType extends HttpException {
  constructor(message?: string) {
    super(
      message || 'UNSUPPORTED MEDIA TYPE',
      HttpStatus.UNSUPPORTED_MEDIA_TYPE,
    );
  }
}
