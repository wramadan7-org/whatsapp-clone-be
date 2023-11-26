import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
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

  async findUsersService(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }

  async findUserByIdService(id: number): Promise<UserEntity | null> {
    return this.userRepository.findOneBy({ id });
  }

  async findUserService(data: any): Promise<UserEntity | null> {
    return this.userRepository.findOneBy(data);
  }

  async updateUserService(
    id: number,
    data: Partial<UserEntity>,
  ): Promise<UserEntity | null> {
    const user = await this.userRepository.findOneBy({ id });

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    Object.assign(user, data);
    user.updatedAt = new Date();

    return this.userRepository.save(user);
  }

  async deleteUserService(id: number): Promise<void> {
    const user = await this.userRepository.findOneBy({ id });

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    await this.userRepository.delete(id);
  }
}
