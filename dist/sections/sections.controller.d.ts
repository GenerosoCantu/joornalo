import { SectionDto } from './dto/section.dto';
import { SectionsService } from './sections.service';
import { Section } from './interfaces/section.interface';
export declare class SectionsController {
    private readonly sectionsService;
    constructor(sectionsService: SectionsService);
    findAll(): Promise<Section[]>;
    getSection(id: any): Promise<Section>;
    create(sectionDto: SectionDto): Promise<Section>;
    updateSection(updateSectionDto: SectionDto, id: any): Promise<Section>;
    delete(id: any): Promise<Section>;
}
