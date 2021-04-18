import { Model } from 'mongoose';
import { HttpService } from '@nestjs/common';
import { Cover } from './interfaces/cover.interface';
export declare class ItemsService {
    private readonly httpService;
    private readonly itemModel;
    constructor(httpService: HttpService, itemModel: Model<Cover>);
    findAll(): Promise<Cover[]>;
    findOne(id: string): Promise<Cover>;
    create(cover: Cover): Promise<Cover>;
    delete(id: string): Promise<Cover>;
    update(id: string, cover: Cover): Promise<Cover>;
}
