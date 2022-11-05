export declare class NewsDto {
    readonly status: string;
    readonly section: string;
    readonly subsections: string;
    readonly title: string;
    readonly desc: string;
    readonly text: string;
    readonly images: string[];
    readonly embed: string[];
    readonly quotes: string[];
    toJSON(): Object;
}
