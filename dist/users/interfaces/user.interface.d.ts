export interface User {
    id?: string;
    username: string;
    name: string;
    password: string;
    reg_time: Date;
    login_fail: number;
    locked: boolean;
    admin: boolean;
}
export interface UserProfile {
    id?: string;
    username: string;
    name: string;
    admin: boolean;
}
export interface Permissions {
    permissions: string[];
}
