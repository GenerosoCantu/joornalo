import { NewsDto } from './dto/news.dto';
import { NewsService } from './news.service';
import { News } from './interfaces/news.interface';
export declare class NewsController {
    private readonly newsService;
    constructor(newsService: NewsService);
    findAll(): Promise<News[]>;
    getNews(id: any): Promise<News>;
    create(newsDto: NewsDto): Promise<News>;
    updateNews(updateNewsDto: NewsDto, id: any): Promise<News>;
    delete(id: any): Promise<News>;
}
