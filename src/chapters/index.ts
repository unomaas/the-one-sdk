import { Base } from 'src/base';
import { Chapter } from './types';

const route = `/chapter`;


export class Chapters extends Base {

	/**
	 * @description Pings the LOTR API `/chapter` endpoint and returns an array of Lord of the Rings chapters.
	 * @returns {Promise<Chapter[]>}
	 * @extends Base
	 * @memberof Chapters
	 * @example
	 * const chapters = await sdk.chapters.getAllChapters();
	 * console.log(chapters);
	*/
	public async getAllChapters(): Promise<Chapter[]> {
		const data = await this.invoke<Chapter[]>(`${route}`);
		return data;
	}; // End getAllChapters


	/**
	 * @description Pings the LOTR API `/chapter/{id}` endpoint and returns the requested Lord of the Rings chapter.
	 * @param {string} id - The ID of the chapter to retrieve.
	 * @returns {Promise<Chapter>}
	 * @extends Base
	 * @memberof Chapters
	 * @example
	 * const chapter = await sdk.chapters.getChapterById('6091b6d6d58360f988133ba1');
	 * console.log(chapter);
	*/
	public async getChapterById(id: string): Promise<Chapter> {
		const data = await this.invoke<Chapter>(`${route}/${id}`);
		return data;
	}; // End getChapterById

}; // End class Chapters