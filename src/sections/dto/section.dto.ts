import { ApiModelProperty } from '@nestjs/swagger';
import { IsString, IsInt, IsNotEmpty, IsBoolean } from 'class-validator';

export class SectionDto {
  @IsString()
  @IsNotEmpty()
  @ApiModelProperty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  @ApiModelProperty()
  readonly status: string;

  @ApiModelProperty()
  readonly order: number;
}