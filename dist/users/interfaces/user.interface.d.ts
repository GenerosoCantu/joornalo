export declare class User {
    id?: string;
    email: string;
    role: string;
    firstName: string;
    lastName: string;
    phone: string;
    reg_time: Date;
    login_fail: number;
    locked: boolean;
    verified: boolean;
    status: string;
    password: string;
}
export interface UserProfile {
    id?: string;
    email: string;
    firstName: string;
    lastName: string;
    role: string;
    status: string;
}
export interface Permissions {
    permissions: string[];
}
