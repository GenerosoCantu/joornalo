import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    private sessions;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(email: string, pass: string): Promise<any>;
    login(user: any): Promise<{
        user: {
            _id: any;
            email: any;
            firstName: any;
            lastName: any;
            phone: any;
            role: any;
            reg_time: any;
            login_fail: any;
            locked: any;
            verified: any;
            status: any;
            modules: any;
            sections: any;
        };
        accessToken: string;
    }>;
    validateSession(token: any): Promise<boolean>;
    private buildUser;
}
