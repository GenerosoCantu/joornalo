import { CoversService } from './covers.service';
import { Cover } from './interfaces/cover.interface';
export declare class CoversController {
    private readonly coversService;
    constructor(coversService: CoversService);
    findAll(): Promise<Cover[]>;
    findOne(id: any): Promise<Cover>;
}
