import { Model } from 'mongoose';
import { Module } from './interfaces/module.interface';
export declare class ModulesService {
    private readonly moduleModel;
    constructor(moduleModel: Model<Module>);
    findAll(): Promise<Module[]>;
}
