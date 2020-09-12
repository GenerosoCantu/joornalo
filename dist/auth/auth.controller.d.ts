import { AuthService } from '../auth/auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(req: any): Promise<{
        user: any;
        accessToken: string;
    }>;
}
