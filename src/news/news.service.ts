import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { News } from './interfaces/news.interface'
import { createNewsJsonFile } from '../utils/file-json.utils';
// import * as fs from 'fs';

@Injectable()
export class NewsService {
  constructor(
    @InjectModel('News') private readonly newsModel: Model<News>
  ) { }

  async findAll(): Promise<News[]> {
    // need to limit the number and paginate
    return await this.newsModel.find();
  }

  async findOne(id: string): Promise<News> {
    console.log('findOne:', id);
    return await this.newsModel.findOne({ _id: id });
  }

  // async findNews(email: string): Promise<News> {
  //   return await this.newsModel.findOne({ email: email });
  // }

  async create(news: News): Promise<News> {
    const newNews = new this.newsModel(news);
    createNewsJsonFile('data/news/', newNews['_id'], newNews);
    return await newNews.save();
  }

  async update(id: string, news: News): Promise<News> {
    return await this.newsModel.findByIdAndUpdate(id, news, { new: true, useFindAndModify: false });
  }

  async delete(id: string): Promise<News> {
    return await this.newsModel.findByIdAndRemove(id);
  }

}