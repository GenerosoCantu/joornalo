import { ApiModelProperty } from '@nestjs/swagger';
import { IsString, IsInt, IsNotEmpty, IsBoolean } from 'class-validator';
import { Exclude } from 'class-transformer';
import { classToPlain } from 'class-transformer';

export class StoryDto {

  // @IsString()
  // @IsNotEmpty()
  // @ApiModelProperty()
  // readonly date: Date;

  @IsString()
  @IsNotEmpty()
  @ApiModelProperty()
  readonly status: string;

  @IsString()
  @IsNotEmpty()
  @ApiModelProperty()
  readonly section: string;

  @IsString()
  @ApiModelProperty()
  readonly subsection: string;

  @IsString()
  @IsNotEmpty()
  @ApiModelProperty()
  readonly title: string;

  @IsString()
  @ApiModelProperty()
  readonly desc: string;

  @IsString()
  @ApiModelProperty()
  readonly text: string;

  @ApiModelProperty()
  readonly images: string[];

  @ApiModelProperty()
  readonly embed: string[];

  @ApiModelProperty()
  readonly quotes: string[];

  toJSON() {
    return classToPlain(this);
  }
}
