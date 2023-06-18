import { Base } from './base';
import { Books } from './books';
import { Chapters } from './chapters';
import { Characters } from './characters';
import { Movies } from './movies';
import { Quotes } from './quotes';


export class LotrSDK extends Base {

	public books: Books;
	public chapters: Chapters;
	public characters: Characters;
	public movies: Movies;
	public quotes: Quotes;

	constructor(config: { apiKey: string, baseUrl: string }) {
		super(config);
		this.books = new Books(config);
		this.chapters = new Chapters(config);
		this.characters = new Characters(config);
		this.movies = new Movies(config);
		this.quotes = new Quotes(config);
	}; // End constructor

}; // End class Library