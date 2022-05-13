import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAccountInput } from './dto/create-account.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly users: Repository<User>,
  ) {}

  async createAccount({ email, password, role }: CreateAccountInput) {
    // Check new user
    try {
      const exists = await this.users.findOne({ email });
      if (exists) {
        // if User is exist returns error
        return 'There is a user with that email already';
      }
      await this.users.save(this.users.create({ email, password, role }));
      return true;
    } catch (e) {
      return "Couldn't create Account";
    }
    // Create user & hash the Password
  }
}
