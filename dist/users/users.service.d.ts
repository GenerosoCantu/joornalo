import { Model } from 'mongoose';
import { User, Permissions } from './interfaces/user.interface';
export declare class UsersService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    findAll(): Promise<any>;
    create(user: User): Promise<any>;
    update(id: string, user: User): Promise<any>;
    sleep(ms: any): Promise<unknown>;
    delete(id: string): Promise<any>;
    findOne(id: string): Promise<any>;
    findUser(email: string): Promise<User>;
    findUserProfile(email: string): Promise<any>;
    badLogin(id: string, login_fail: number): Promise<User>;
    updatePermissions(id: string, permissions: Permissions): Promise<User>;
    private buildUser;
    private buildUsers;
}
