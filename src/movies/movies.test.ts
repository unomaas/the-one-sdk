import { Movies } from './movies.index';
import { Base } from '../base';

jest.mock('../base');

describe('Movies', () => {
	const moviesInstance = new Movies({ apiKey: 'testKey' });

	beforeEach(() => {
		(moviesInstance as unknown as Base).invoke = jest.fn();
	});

	/// ⬇ Testing the getAllMovies method:
	it('should call getAllMovies and return an array of movies', async () => {
		const mockData = { docs: [{ _id: '1', name: 'Movie 1' }] };
		moviesInstance.invoke = jest.fn().mockResolvedValue(mockData);

		const movies = await moviesInstance.getAllMovies();
		expect(movies).toEqual(mockData.docs);
		expect(moviesInstance.invoke).toHaveBeenCalledWith('/movie');
	});

	// ⬇ Testing the getMovieById method:
	it('should call getMovieById and return the requested movie', async () => {
		const mockData = { docs: [{ _id: '1', name: 'Movie 1' }] };
		moviesInstance.invoke = jest.fn().mockResolvedValue(mockData);

		const movie = await moviesInstance.getMovieById('1');
		expect(movie).toEqual(mockData.docs[0]);
		expect((moviesInstance as unknown as Base).invoke).toHaveBeenCalledWith('/movie/1');
	});

	// ⬇ Testing the getMovieQuotesById method:
	it('should call getMovieQuotesById and return an array of quotes', async () => {
		const mockData = { docs: [{ _id: '1', name: 'Quote 1' }] };
		moviesInstance.invoke = jest.fn().mockResolvedValue(mockData);

		const quotes = await moviesInstance.getMovieQuotesById('1');
		expect(quotes).toEqual(mockData.docs);
		expect((moviesInstance as unknown as Base).invoke).toHaveBeenCalledWith('/movie/1/quote');
	});
}); // End describe 'Movies'
