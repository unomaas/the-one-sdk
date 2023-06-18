import { Quotes } from './quotes.index';
import { Base } from '../base';

jest.mock('../base');

describe('Quotes', () => {
  const quotesInstance = new Quotes({ apiKey: 'testKey' });

  beforeEach(() => {
    (quotesInstance as unknown as Base).invoke = jest.fn();
  });

  // ⬇ Testing the getAllQuotes method:
  it('should call getAllQuotes and return an array of quotes', async () => {
    const mockData = { docs: [{ _id: '1', name: 'Quote 1' }] };
    quotesInstance.invoke = jest.fn().mockResolvedValue(mockData);

    const quotes = await quotesInstance.getAllQuotes();
    expect(quotes).toEqual(mockData.docs);
    expect(quotesInstance.invoke).toHaveBeenCalledWith('/quote');
  });

  // ⬇ Testing the getQuoteById method:
  it('should call getQuoteById and return the requested quote', async () => {
    const mockData = { docs: [{ _id: '1', name: 'Quote 1' }] };
    quotesInstance.invoke = jest.fn().mockResolvedValue(mockData);

    const quote = await quotesInstance.getQuoteById('1');
    expect(quote).toEqual(mockData.docs[0]);
    expect((quotesInstance as unknown as Base).invoke).toHaveBeenCalledWith('/quote/1');
  });
}); // End describe 'Quotes'
