import { IsNotEmpty, IsString, Length } from 'class-validator';

export class SignInDto {
  @IsString()
  @IsNotEmpty()
  @Length(11)
  phoneNumber: string;
}
