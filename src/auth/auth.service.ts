import { Injectable } from '@nestjs/common';
import { NotFoundException } from 'src/common/exception/notFound.exception';
import { UserService } from 'src/users/user.service';
import { SignInDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async signIn(data: SignInDto): Promise<any> {
    const user = await this.userService.findUserService(data);
    if (!user)
      throw new NotFoundException(`Phone number ${data.phoneNumber} not found`);

    return user;
  }
}
