import { Base } from 'src/base';
import { Quote } from './types';

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
		const data = await this.invoke<Quote[]>(`${route}`);
		return data;
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
		const data = await this.invoke<Quote>(`${route}/${id}`);
		return data;
	}; // End getQuoteById

}; // End class Quotes