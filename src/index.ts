import { Base } from './base';
import { Books } from './books/books.index';
import { Chapters } from './chapters/chapters.index';
import { Characters } from './characters/characters.index';
import { Movies } from './movies/movies.index';
import { Quotes } from './quotes/quotes.index';


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