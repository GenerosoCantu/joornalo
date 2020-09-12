export interface User {
    id?: string;
    email: string;
    role: string;
    firstName: string;
    lastName: string;
    password: string;
    phone: string;
    reg_time: Date;
    login_fail: number;
    locked: boolean;
    verified: boolean;
}
export interface UserProfile {
    id?: string;
    email: string;
    firstName: string;
    lastName: string;
    role: string;
}
export interface Permissions {
    permissions: string[];
}
