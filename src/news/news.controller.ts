import { Controller, Request, Get, Post, Put, Patch, Delete, Body, Param, Header, UseGuards, UseInterceptors } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { NewsDto } from './dto/news.dto';
import { NewsService } from './news.service';
import { News } from './interfaces/news.interface';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) { }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll(): Promise<News[]> {
    return this.newsService.findAll();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/:id')
  getNews(@Param('id') id): Promise<News> {
    return this.newsService.findOne(id);
  }

  @Post()
  @UseGuards(AuthGuard('jwt'))
  create(@Body() newsDto: NewsDto): Promise<News> {
    return this.newsService.create(newsDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch('/:id')
  updateNews(@Body() updateNewsDto: NewsDto, @Param('id') id): Promise<News> {
    return this.newsService.update(id, updateNewsDto);
  }

  @Delete(':id')
  delete(@Param('id') id): Promise<News> {
    return this.newsService.delete(id);
  }

}
