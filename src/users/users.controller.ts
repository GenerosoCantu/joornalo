import { Controller, Request, Get, Post, Put, Delete, Body, Param, Header, UseGuards, UseInterceptors } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserDto, PermissionsDto } from './dto/user.dto';
import { UsersService } from './users.service';
import { User, Permissions } from './interfaces/user.interface';

@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  @UseGuards(AuthGuard('jwt'))
  create(@Body() userDto: UserDto): Promise<User> {
    return this.usersService.create(userDto);
  }

  @Delete(':id')
  delete(@Param('id') id): Promise<User> {
    return this.usersService.delete(id);
  }

  //@Header('x-men', 'eureka')
  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  getProfile(@Request() req) {
    //return req.user;
    return this.usersService.findUserProfile(req.user.username);
  }

  // @UseGuards(AuthGuard('jwt'))
  // @Get('profile')
  // getProfile(@Request() req) {
  //   //return req.user;
  //   let user = this.usersService.findOne(req.user.userId).then((res) => {
  //     console.log('==============', res);
  //     return req.user;
  //   });

  // }

  @Put('permissions/:id')
  update(@Body() permissionsDto: PermissionsDto, @Param('id') id): Promise<User> {
    return this.usersService.updatePermissions(id, permissionsDto);
  }

}
