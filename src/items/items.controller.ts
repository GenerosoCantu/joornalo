import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';
import { ValidationPipe, ParseUUIDPipe, UploadedFile, UseInterceptors, UploadedFiles } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { editFileName, imageFileFilter } from '../utils/file-upload.utils';
import { diskStorage } from 'multer';

@Controller('items')
export class ItemsController {
  constructor(
    private readonly itemsService: ItemsService
  ) { }

  // @Get()
  // findAll(): any {
  //   return this.itemsService.external();
  // }

  @Get()
  findAll(): Promise<Item[]> {
    return this.itemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', new ParseUUIDPipe({ version: '4' })) id): Promise<Item> {
    return this.itemsService.findOne(id);
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto): Promise<Item> {
    return this.itemsService.create(createItemDto);
  }

  @Delete(':id')
  delete(@Param('id') id): Promise<Item> {
    return this.itemsService.delete(id);
  }

  @Put(':id')
  update(@Body() updateItemDto: CreateItemDto, @Param('id') id): Promise<Item> {
    return this.itemsService.update(id, updateItemDto);
  }

  @Post('uploadx')
  @UseInterceptors(
    FilesInterceptor('file', 1, { dest: './data/tmp' }))
  async uploadFile(@UploadedFiles() file, @Body() body) {
    console.log(body.name);
    console.log('file----', file);
    return this.itemsService.uploadFile(file);
  }

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './data/tmp',
        // filename: editFileName,
      }),
      fileFilter: imageFileFilter,
    }),
  )
  async uploadedFile(@UploadedFile() file) {
    console.log(file);
    const response = {
      originalname: file.originalname,
      filename: file.filename,
    };
    return response;
  }

}
