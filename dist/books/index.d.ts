import { Base } from '../base';
import { Book } from './types';
import { Chapter } from '../chapters/types';
export declare class Books extends Base {
    getAllBooks(): Promise<Book[]>;
    getBookById(id: string): Promise<Book>;
    getBookChaptersById(id: string): Promise<Chapter[]>;
}
