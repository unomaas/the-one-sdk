import { Base } from 'src/base';
import { Movie } from './types';
import { Quote } from '../quotes/types';

const route = `/movie/`;


export class Movies extends Base {

	/**
	 * @description Pings the LOTR API `/movie` endpoint and returns an array of Lord of the Rings movies.
	 * @returns {Promise<Movie[]>}
	 * @extends Base
	 * @memberof Movies
	 * @example
	 * const movies = await sdk.movies.getAllMovies();
	 * console.log(movies);
	*/
	public async getAllMovies(): Promise<Movie[]> {
		const data = await this.invoke<Movie[]>(`${route}`);
		return data;
	}; // End getAllMovies


	/**
	 * @description Pings the LOTR API `/movie/{id}` endpoint and returns the requested Lord of the Rings movie.
	 * @param {string} id - The ID of the movie to retrieve.
	 * @returns {Promise<Movie>}
	 * @extends Base
	 * @memberof Movies
	 * @example
	 * const movie = await sdk.movies.getMovieById('5cd95395de30eff6ebccde5b');
	 * console.log(movie);
	*/
	public async getMovieById(id: string): Promise<Movie> {
		const data = await this.invoke<Movie>(`${route}/${id}`);
		return data;
	}; // End getMovieById


	/**
	 * @description Pings the LOTR API `/movie/{id}/quote` endpoint and returns an array of quotes from the requested Lord of the Rings movie.  Warning: Currently only works for the LOTR Trilogy (id: 5cd95395de30eff6ebccde5b || 5cd95395de30eff6ebccde5c || 5cd95395de30eff6ebccde5d).
	 * @param {string} id - The ID of the movie to retrieve quotes from.
	 * @returns {Promise<Quote[]>}
	 * @extends Base
	 * @memberof Quotes
	 * @example
	 * const quotes = await sdk.movies.getMovieQuotesById('5cd95395de30eff6ebccde5b');
	 * console.log(quotes);
	*/
	public async getMovieQuotesById(id: string): Promise<Quote[]> {
		const data = await this.invoke<Quote[]>(`${route}/${id}/quote`);
		return data;
	} // End getMovieQuotes

}; // End class Movies