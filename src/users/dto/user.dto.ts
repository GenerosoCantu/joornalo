import { ApiModelProperty } from '@nestjs/swagger';
import { IsString, IsInt, IsNotEmpty, IsBoolean } from 'class-validator';
import { Exclude } from 'class-transformer';
import { classToPlain } from 'class-transformer';

export class UserDto {
  @IsString()
  @IsNotEmpty()
  @ApiModelProperty()
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  @ApiModelProperty()
  readonly role: string;

  @IsString()
  @IsNotEmpty()
  @ApiModelProperty()
  readonly firstName: string;

  @IsString()
  @IsNotEmpty()
  @ApiModelProperty()
  readonly lastName: string;

  // @ApiModelProperty()
  @Exclude({ toPlainOnly: true })
  readonly password: string;

  @ApiModelProperty()
  readonly phone: string;

  @ApiModelProperty()
  readonly reg_time: Date;

  @ApiModelProperty()
  readonly login_fail: number;

  @ApiModelProperty()
  readonly locked: boolean;

  @ApiModelProperty()
  readonly verified: boolean;

  @ApiModelProperty()
  readonly permissions: string[];

  @ApiModelProperty()
  readonly status: string;

  @ApiModelProperty()
  readonly sections: string[];

  @ApiModelProperty()
  readonly modules: string[];

  toJSON() {
    return classToPlain(this);
  }

  // constructor(partial: Partial<UserDto>) {
  //   Object.assign(this, partial);
  // }
}

export class PermissionsDto {
  @ApiModelProperty()
  readonly permissions: string[];
}