import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  private sessions = {};

  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
  ) { }

  async validateUser(email: string, pass: string): Promise<any> {
    let user = await this.usersService.findUser(email);
    if (user && user.password === pass && !user.locked) {
      return user;
    }
    if (user.locked) {
      return 403;
    }

    if (user) {
      user = await this.usersService.badLogin(user['_id'], user['login_fail']);
      if (user.locked) {
        return 403;
      }
    }
    return 401;
  }

  async login(user: any) {
    console.log('user::::::::::::');
    console.log(user);
    const payload = { email: user.email, sub: user['_id'] };
    let token = this.jwtService.sign(payload);
    this.sessions[user.email] = token;
    console.log('---------------------------------');
    console.log(this.sessions);
    user.password = '@@@@@@@@@@';
    return {
      user,
      accessToken: token,
    };
  }

  async validateSession(token: any) {
    console.log('validateSession-----------------------');
    for (let [email, validToken] of Object.entries(this.sessions)) {
      console.log(`${email}: ${validToken}`);
      if (validToken == token) {
        return true;
      }
      return false;
    }
    //return (this.sessions[email] = token);
  }
}