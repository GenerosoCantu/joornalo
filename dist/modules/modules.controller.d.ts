import { ModulesService } from './modules.service';
import { Module } from './interfaces/module.interface';
export declare class ModulesController {
    private readonly modulesService;
    constructor(modulesService: ModulesService);
    findAll(): Promise<Module[]>;
}
