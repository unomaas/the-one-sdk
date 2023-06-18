import { Books } from './books.index';
import { Base } from '../base';

jest.mock('../base');

describe('Books', () => {
	const booksInstance = new Books({ apiKey: 'testKey' });

	beforeEach(() => {
		(booksInstance as unknown as Base).invoke = jest.fn();
	});

	// ⬇ Testing the getAllBooks method:
	it('should call getAllBooks and return an array of books', async () => {
		const mockData = { docs: [{ _id: '1', name: 'Book 1' }] };
		booksInstance.invoke = jest.fn().mockResolvedValue(mockData);

		const books = await booksInstance.getAllBooks();
		expect(books).toEqual(mockData.docs);
		expect(booksInstance.invoke).toHaveBeenCalledWith('/book');
	});

	// ⬇ Testing the getBookById method:
	it('should call getBookById and return the requested book', async () => {
		const mockData = { docs: [{ _id: '1', name: 'Book 1' }] };
		booksInstance.invoke = jest.fn().mockResolvedValue(mockData);

		const book = await booksInstance.getBookById('1');
		expect(book).toEqual(mockData.docs[0]);
		expect((booksInstance as unknown as Base).invoke).toHaveBeenCalledWith('/book/1');
	});

	// ⬇ Testing the getBookChaptersById method:
	it('should call getBookChaptersById and return an array of chapters', async () => {
		const mockData = { docs: [{ _id: '1', name: 'Chapter 1' }] };
		booksInstance.invoke = jest.fn().mockResolvedValue(mockData);

		const chapters = await booksInstance.getBookChaptersById('1');
		expect(chapters).toEqual(mockData.docs);
		expect((booksInstance as unknown as Base).invoke).toHaveBeenCalledWith('/book/1/chapter');
	}); 
}); // End describe 'Books'