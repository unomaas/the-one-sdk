import { Base } from '../base';
import { Chapter } from './types';
export declare class Chapters extends Base {
    getAllChapters(): Promise<Chapter[]>;
    getChapterById(id: string): Promise<Chapter>;
}
