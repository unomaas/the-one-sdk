import { Base } from '../base';
import { Quote } from './types';
export declare class Quotes extends Base {
    getAllQuotes(): Promise<Quote[]>;
    getQuoteById(id: string): Promise<Quote>;
}
