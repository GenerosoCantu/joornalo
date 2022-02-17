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

  async findAll(page: number = 0, limit: number = 10, section, status, sortBy = 'date', sortOrder = '-1', date = null): Promise<any> {
    // title search index TBD
    // return await this.newsModel.find();
    // http://localhost:4000/news/?page=0&limit=5&section=international&status=Pending&sortBy=date&sortOrder=-1&date=12/1/2021

    const match = {
      ...(section && { section }),
      ...(status && { status }),
      ...(date && { date: { $gte: new Date(date + ' 00:00:00'), $lte: new Date(date + ' 23:59:59') } })
    };

    const skip = page * limit

    const response = await this.newsModel.aggregate([
      { $match: match },
      { '$sort': { 'date': sortOrder === '1' ? 1 : -1 } },
      {
        '$facet': {
          metadata: [
            { $count: "totalItems" },
            {
              $addFields: {
                itemsPerPage: limit,
                page
              }
            }
          ],
          data: [{ $skip: +skip }, { $limit: +limit }]
        }
      }
    ]);

    return {
      metadata: response[0].metadata[0],
      data: response[0].data
    }
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