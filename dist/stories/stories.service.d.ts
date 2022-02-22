import { Model } from 'mongoose';
import { Story } from './interfaces/Stories.interface';
export declare class StoriesService {
    private readonly storyModel;
    constructor(storyModel: Model<Story>);
    findAll(page: number, limit: number, section: any, status: any, sortBy?: string, sortOrder?: string, date?: any): Promise<any>;
    findOne(id: string): Promise<Story>;
    create(story: Story): Promise<Story>;
    update(id: string, story: Story): Promise<Story>;
    delete(id: string): Promise<Story>;
}
