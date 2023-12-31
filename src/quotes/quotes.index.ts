import { Base } from '../base';
import { Quote } from './quotes.types';

const route = `/quote`;


export class Quotes extends Base {

	/**
	 * @description Pings the LOTR API `/quote` endpoint and returns an array of Lord of the Rings quotes.
	 * @returns {Promise<Quote[]>}
	 * @extends Base
	 * @memberof Quotes
	 * @example
	 * const quotes = await sdk.quotes.getAllQuotes();
	 * console.log(quotes);
	 */
	public async getAllQuotes(): Promise<Quote[]> {
		const data = await this.invoke<{ docs: Quote[] }>(`${route}`);
		return data.docs;
	}; // End getAllQuotes


	/**
	 * @description Pings the LOTR API `/quote/{id}` endpoint and returns the requested Lord of the Rings quote.
	 * @param {string} id - The ID of the quote to retrieve.
	 * @returns {Promise<Quote>}
	 * @extends Base
	 * @memberof Quotes
	 * @example
	 * const quote = await sdk.quotes.getQuoteById('5cd96e05de30eff6ebcce7e9');
	 * console.log(quote);
	 */
	public async getQuoteById(id: string): Promise<Quote> {
		const data = await this.invoke<{ docs: Quote[] }>(`${route}/${id}`);
		return data.docs[0];
	}; // End getQuoteById

}; // End class Quotes