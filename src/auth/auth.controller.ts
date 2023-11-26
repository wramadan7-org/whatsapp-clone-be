import { Controller, HttpCode, HttpStatus, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ResponseSuccessDto } from 'src/dto/global.dto';
import { InternalServerErrorException } from 'src/common/exception/internalServerError.exception';
import { SignInDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('signin')
  async signIn(@Body() requestSignIn: SignInDto): Promise<ResponseSuccessDto> {
    try {
      const user = await this.authService.signIn(requestSignIn);

      const response: ResponseSuccessDto = {
        statusCode: HttpStatus.OK,
        message: 'Login successfully',
        data: user,
      };

      return response;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
