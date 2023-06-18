import { Base } from '../base';
import { Character } from './types';
import { Quote } from '../quotes/types';
export declare class Characters extends Base {
    getAllCharacters(): Promise<Character[]>;
    getCharacterById(id: string): Promise<Character>;
    getCharacterQuotesById(id: string): Promise<Quote[]>;
}
