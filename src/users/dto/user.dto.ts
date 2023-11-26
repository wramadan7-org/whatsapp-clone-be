import {
  IsString,
  IsNotEmpty,
  IsDate,
  Length,
  IsOptional,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  readonly firstName: string;

  @IsString()
  @IsNotEmpty()
  readonly lastName: string;

  @IsString()
  @IsOptional()
  readonly profile?: string;

  @IsString()
  @IsOptional()
  readonly info?: string;

  @IsDate()
  @IsOptional()
  readonly lastUpdateInfo?: Date;

  @IsString()
  @Length(11)
  @IsNotEmpty()
  readonly phoneNumber: string;
}

export class UpdateUserDto {
  @IsString()
  @IsOptional()
  readonly firstName?: string;

  @IsString()
  @IsOptional()
  readonly lastName?: string;

  @IsString()
  @IsOptional()
  readonly profile?: string;

  @IsString()
  @IsOptional()
  readonly info?: string;

  @IsDate()
  @IsOptional()
  readonly lastUpdateInfo?: Date;

  @IsString()
  @Length(11)
  @IsOptional()
  readonly phoneNumber: string;
}
