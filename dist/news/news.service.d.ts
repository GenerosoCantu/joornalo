import { Model } from 'mongoose';
import { News } from './interfaces/news.interface';
export declare class NewsService {
    private readonly newsModel;
    constructor(newsModel: Model<News>);
    findAll(page: number, limit: number, section: any, status: any, sortBy?: string, sortOrder?: string, date?: any): Promise<any>;
    findOne(id: string): Promise<News>;
    create(news: News): Promise<News>;
    update(id: string, news: News): Promise<News>;
    delete(id: string): Promise<News>;
}
