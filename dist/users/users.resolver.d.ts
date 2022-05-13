import { CreateAccountInput, CreateAccountOutput } from './dto/create-account.dto';
import { UsersService } from './users.service';
export declare class UsersResolver {
    private readonly usersService;
    constructor(usersService: UsersService);
    createAccount(createAccountInput: CreateAccountInput): Promise<CreateAccountOutput>;
}
