export declare class StoryDto {
    readonly status: string;
    readonly section: string;
    readonly subsection: string;
    readonly title: string;
    readonly desc: string;
    readonly text: string;
    readonly images: string[];
    readonly embed: string[];
    readonly quotes: string[];
    toJSON(): Record<string, any>;
}
