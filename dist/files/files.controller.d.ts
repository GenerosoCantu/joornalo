import { FilesService } from './files.service';
export declare class FilesController {
    private readonly filesService;
    constructor(filesService: FilesService);
    uploadedFile(file: any): Promise<{
        originalname: any;
        filename: any;
    }>;
}
