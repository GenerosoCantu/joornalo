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

  async validateUser(username: string, pass: string): Promise<any> {
    let user = await this.usersService.findUser(username);
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
    const payload = { username: user.username, sub: user['_id'] };
    let token = this.jwtService.sign(payload);
    this.sessions[user.username] = token;
    console.log('---------------------------------');
    console.log(this.sessions);
    return {
      access_token: token,
    };
  }

  async validateSession(token: any) {
    console.log('validateSession-----------------------');
    for (let [username, validToken] of Object.entries(this.sessions)) {
      console.log(`${username}: ${validToken}`);
      if (validToken == token) {
        return true;
      }
      return false;
    }
    //return (this.sessions[username] = token);
  }
}