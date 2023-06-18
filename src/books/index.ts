import { Base } from '../base';

import { Book } from './types';
import { Chapter } from '../chapters/types';

const route = `/book`;


export class Books extends Base {

	/**
	 * @description Pings the LOTR API `/book` endpoint and returns an array of Lord of the Rings books.
	 * @returns {Promise<Book[]>}
	 * @extends Base
	 * @memberof Books
	 * @example
	 * const books = await sdk.books.getAllBooks();
	 * console.log(books);
	 */
	public async getAllBooks(): Promise<Book[]> {
		const data = await this.invoke<{ docs: Book[] }>(`${route}`);
		return data.docs;
	}; // End getAllBooks


	/**
	 * @description Pings the LOTR API `/book/{id}` endpoint and returns the requested Lord of the Rings book.
	 * @param {string} id - The ID of the book to retrieve.
	 * @returns {Promise<Book>}
	 * @extends Base
	 * @memberof Books
	 * @example
	 * const book = await sdk.books.getBookById('5cf5805fb53e011a64671582');
	 * console.log(book);
	 */
	public async getBookById(id: string): Promise<Book> {
		const data = await this.invoke<{ docs: Book[] }>(`${route}/${id}`);
		return data.docs[0];
	}; // End getBookById


	/**
	 * @description Pings the LOTR API `/book/{id}/chapter` endpoint and returns an array of chapters from the requested Lord of the Rings book.
	 * @param {string} id - The ID of the book to retrieve chapters from.
	 * @returns {Promise<Chapter[]>}
	 * @extends Base
	 * @memberof Books
	 * @example
	 * const chapter = await sdk.books.getBookChaptersById('5cf5805fb53e011a64671582');
	 * console.log(chapter);
	 */
	public async getBookChaptersById(id: string): Promise<Chapter[]> {
		const data = await this.invoke<{ docs: Chapter[] }>(`${route}/${id}/chapter`);
		return data.docs;
	}; // End getBookChapter

}; // End class Books