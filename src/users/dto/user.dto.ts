import { ApiModelProperty } from '@nestjs/swagger';
import { IsString, IsInt, IsNotEmpty, IsBoolean } from 'class-validator';

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

  @ApiModelProperty()
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
}

export class PermissionsDto {
  @ApiModelProperty()
  readonly permissions: string[];
}