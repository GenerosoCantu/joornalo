import { Model } from 'mongoose';
import { User, Permissions } from './interfaces/user.interface';
export declare class UsersService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    findAll(): Promise<User[]>;
    create(user: User): Promise<User>;
    update(id: string, user: User): Promise<User>;
    sleep(ms: any): Promise<unknown>;
    delete(id: string): Promise<User>;
    findOne(id: string): Promise<User>;
    findUser(email: string): Promise<User>;
    findUserProfile(email: string): Promise<any>;
    badLogin(id: string, login_fail: number): Promise<User>;
    updatePermissions(id: string, permissions: Permissions): Promise<User>;
}
