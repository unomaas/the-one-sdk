import { Chapters } from './chapters.index';
import { Base } from '../base';

jest.mock('../base');

describe('Chapters', () => {
  const chaptersInstance = new Chapters({ apiKey: 'testKey' });

  beforeEach(() => {
    (chaptersInstance as unknown as Base).invoke = jest.fn();
  });

  // ⬇ Testing the getAllChapters method:
  it('should call getAllChapters and return an array of chapters', async () => {
    const mockData = { docs: [{ _id: '1', name: 'Chapter 1' }] };
    chaptersInstance.invoke = jest.fn().mockResolvedValue(mockData);

    const chapters = await chaptersInstance.getAllChapters();
    expect(chapters).toEqual(mockData.docs);
    expect(chaptersInstance.invoke).toHaveBeenCalledWith('/chapter');
  });

  // ⬇ Testing the getChapterById method:
  it('should call getChapterById and return the requested chapter', async () => {
    const mockData = { docs: [{ _id: '1', name: 'Chapter 1' }] };
    chaptersInstance.invoke = jest.fn().mockResolvedValue(mockData);

    const chapter = await chaptersInstance.getChapterById('1');
    expect(chapter).toEqual(mockData.docs[0]);
    expect((chaptersInstance as unknown as Base).invoke).toHaveBeenCalledWith('/chapter/1');
  });
}); // End describe 'Chapters'