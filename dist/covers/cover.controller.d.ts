import { CreateCoverDto } from './dto/create-cover.dto';
import { CoversService } from './covers.service';
import { Cover } from './interfaces/cover.interface';
export declare class CoversController {
    private readonly coversService;
    constructor(coversService: CoversService);
    findAll(): Promise<Cover[]>;
    findOne(id: any): Promise<Cover>;
    create(createCoverDto: CreateCoverDto): Promise<Cover>;
    delete(id: any): Promise<Cover>;
    update(updateCoverDto: CreateCoverDto, id: any): Promise<Cover>;
    uploadFile(file: any): Promise<any>;
}
