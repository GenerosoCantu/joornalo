import { Model } from 'mongoose';
import { Section } from './interfaces/section.interface';
export declare class SectionsService {
    private readonly sectionModel;
    constructor(sectionModel: Model<Section>);
    findAll(): Promise<Section[]>;
    findOne(id: string): Promise<Section>;
    findSection(email: string): Promise<Section>;
    create(section: Section): Promise<Section>;
    update(id: string, section: Section): Promise<Section>;
    delete(id: string): Promise<Section>;
}
