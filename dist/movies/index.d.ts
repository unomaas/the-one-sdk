import { Base } from '../base';
import { Movie } from './types';
import { Quote } from '../quotes/types';
export declare class Movies extends Base {
    getAllMovies(): Promise<Movie[]>;
    getMovieById(id: string): Promise<Movie>;
    getMovieQuotesById(id: string): Promise<Quote[]>;
}
