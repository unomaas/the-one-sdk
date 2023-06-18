import { Characters } from './characters.index';
import { Base } from '../base';

jest.mock('../base');

describe('Characters', () => {
	const charactersInstance = new Characters({ apiKey: 'testKey' });

	beforeEach(() => {
		(charactersInstance as unknown as Base).invoke = jest.fn();
	});

	// ⬇ Testing the getAllCharacters method:
	it('should call getAllCharacters and return an array of characters', async () => {
		const mockData = { docs: [{ _id: '1', name: 'Character 1' }] };
		charactersInstance.invoke = jest.fn().mockResolvedValue(mockData);

		const characters = await charactersInstance.getAllCharacters();
		expect(characters).toEqual(mockData.docs);
		expect(charactersInstance.invoke).toHaveBeenCalledWith('/character');
	});

	// ⬇ Testing the getCharacterById method:
	it('should call getCharacterById and return the requested character', async () => {
		const mockData = { docs: [{ _id: '1', name: 'Character 1' }] };
		charactersInstance.invoke = jest.fn().mockResolvedValue(mockData);

		const character = await charactersInstance.getCharacterById('1');
		expect(character).toEqual(mockData.docs[0]);
		expect((charactersInstance as unknown as Base).invoke).toHaveBeenCalledWith('/character/1');
	});

	// ⬇ Testing the getCharacterQuotesById method:
	it('should call getCharacterQuotesById and return an array of quotes', async () => {
		const mockData = { docs: [{ _id: '1', name: 'Quote 1' }] };
		charactersInstance.invoke = jest.fn().mockResolvedValue(mockData);

		const quotes = await charactersInstance.getCharacterQuotesById('1');
		expect(quotes).toEqual(mockData.docs);
		expect((charactersInstance as unknown as Base).invoke).toHaveBeenCalledWith('/character/1/quote');
	});
}); // End describe 'Characters'
