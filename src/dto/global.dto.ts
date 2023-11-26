export class ResponseSuccessDto {
  readonly statusCode: number;
  readonly message: string;
  readonly data?: any;
}

export class ResponseErrorDto {
  readonly statusCode: number;
  readonly message: string;
  readonly details?: any;
}
