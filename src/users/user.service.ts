import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
// import { User } from './interface/user.interface';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async createUserService(userData: Partial<UserEntity>) {
    const user = this.userRepository.create(userData);
    return this.userRepository.save(user);
  }
}
