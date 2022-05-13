import { Repository } from 'typeorm';
import { CreateAccountInput } from './dto/create-account.dto';
import { User } from './entities/user.entity';
export declare class UsersService {
    private readonly users;
    constructor(users: Repository<User>);
    createAccount({ email, password, role }: CreateAccountInput): Promise<true | "There is a user with that email already" | "Couldn't create Account">;
}
