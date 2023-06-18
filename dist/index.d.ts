import { Base } from './base';
import { Books } from './books';
import { Chapters } from './chapters';
import { Characters } from './characters';
import { Movies } from './movies';
import { Quotes } from './quotes';
export declare class LotrSDK extends Base {
    books: Books;
    chapters: Chapters;
    characters: Characters;
    movies: Movies;
    quotes: Quotes;
    constructor(config: {
        apiKey: string;
        baseUrl: string;
    });
}
