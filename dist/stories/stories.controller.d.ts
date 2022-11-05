import { StoryDto } from './dto/stories.dto';
import { StoriesService } from './stories.service';
import { Story } from './interfaces/stories.interface';
export declare class StoriesController {
    private readonly storiesService;
    constructor(storiesService: StoriesService);
    findAll({ page, limit, section, status, sortBy, sortOrder, date }: {
        page: any;
        limit: any;
        section: any;
        status: any;
        sortBy: any;
        sortOrder: any;
        date: any;
    }): Promise<any>;
    getStories(id: any): Promise<Story>;
    create(storyDto: StoryDto): Promise<Story>;
    updateStory(updateStoryDto: StoryDto, id: any): Promise<Story>;
    delete(id: any): Promise<Story>;
}
