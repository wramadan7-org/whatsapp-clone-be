import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsNumber,
  IsBoolean,
  IsEnum,
} from 'class-validator';

enum Status {
  Pending = 'pending',
  Error = 'error',
  Success = 'success',
}

export class CreateMessageDto {
  @IsNumber()
  @IsNotEmpty()
  readonly personalId: number;

  @IsNumber()
  @IsNotEmpty()
  readonly interlocutorsId: number;

  @IsString()
  @IsNotEmpty()
  readonly message: string;

  @IsBoolean()
  @IsOptional()
  readonly isSend: boolean;

  @IsBoolean()
  @IsOptional()
  readonly isReceive: boolean;

  @IsBoolean()
  @IsOptional()
  readonly isRead: boolean;

  @IsEnum(Status)
  @IsOptional()
  readonly status: Status;
}
