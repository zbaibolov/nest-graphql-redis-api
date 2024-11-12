import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { User } from './dto/user.entity';
import { UpdateUserInput } from './dto/update-user-input';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    @Inject(CACHE_MANAGER)
    private cacheManager: Cache,
  ) {}

  async create(createUserInput: CreateUserInput): Promise<User> {
    const user = this.usersRepository.create(createUserInput);
    const savedUser = await this.usersRepository.save(user);
    await this.cacheManager.del('users');
    return savedUser;
  }

  async findAll(): Promise<User[]> {
    const cachedUsers: User[] = await this.cacheManager.get('users');
    if (cachedUsers) {
      return cachedUsers;
    }
    const users = await this.usersRepository.find();
    await this.cacheManager.set('users', users, 1000);
    return users;
  }

  async findOne(id: number): Promise<User> {
    const cacheKey = `user_${id}`;
    const cachedUser: User = await this.cacheManager.get(cacheKey);
    if (cachedUser) {
      return cachedUser;
    }
    const user = await this.usersRepository.findOneBy({ id });
    if (user) {
      await this.cacheManager.set(cacheKey, user, 1000);
    }
    return user;
  }

  async update(id: number, updateUserInput: UpdateUserInput): Promise<User> {
    await this.usersRepository.update(id, updateUserInput);
    const updatedUser = await this.findOne(id);
    await this.cacheManager.del('users');
    await this.cacheManager.set(`user_${id}`, updatedUser, 1000);
    return updatedUser;
  }

  async remove(id: number): Promise<boolean> {
    const result = await this.usersRepository.delete(id);
    await this.cacheManager.del('users');
    await this.cacheManager.del(`user_${id}`);
    return result.affected > 0;
  }
}
