import { AuthService } from '../auth/auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(req: any): Promise<{
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
}
