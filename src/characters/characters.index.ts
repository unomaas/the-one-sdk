import { Base } from '../base';
import { Character } from './characters.types';
import { Quote } from '../quotes/quotes.types';

const route = `/character`;


export class Characters extends Base {

	/**
	 * @description Pings the LOTR API `/character` endpoint and returns an array of Lord of the Rings characters.
	 * @returns {Promise<Character[]>}
	 * @extends Base
	 * @memberof Characters
	 * @example
	 * const characters = await sdk.characters.getAllCharacters();
	 * console.log(characters);
	 */
	public async getAllCharacters(): Promise<Character[]> {
		const data = await this.invoke<{ docs: Character[] }>(`${route}`);
		return data.docs;
	}; // End getAllCharacters


	/**
	 * @description Pings the LOTR API `/character/{id}` endpoint and returns the requested Lord of the Rings character.
	 * @param {string} id - The ID of the character to retrieve.
	 * @returns {Promise<Character>}
	 * @extends Base
	 * @memberof Characters
	 * @example
	 * const character = await sdk.characters.getCharacterById('5cd99d4bde30eff6ebccfbbe');
	 * console.log(character);
	 */
	public async getCharacterById(id: string): Promise<Character> {
		const data = await this.invoke<{ docs: Character[] }>(`${route}/${id}`);
		return data.docs[0];
	}; // End getCharacterById


	/**
	 * @description Pings the LOTR API `/character/{id}/quote` endpoint and returns an array of quotes from the requested Lord of the Rings character.
	 * @param {string} id - The ID of the character to retrieve quotes from.
	 * @returns {Promise<Quote[]>}
	 * @extends Base
	 * @memberof Quotes
	 * @example
	 * const quotes = await sdk.characters.getCharacterQuotesById('5cd99d4bde30eff6ebccfbbe');
	 * console.log(quotes);
	 */
	public async getCharacterQuotesById(id: string): Promise<Quote[]> {
		const data = await this.invoke<{ docs: Quote[] }>(`${route}/${id}/quote`);
		return data.docs;
	}; // End getCharacterQuotes

}; // End class Characters
