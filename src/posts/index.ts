import { Base } from 'src/base';

export class Posts extends Base {

	public async getPosts() {
		const data = await this.invoke('/post');

		return data;
	}; // End getPosts

	public async getPost(id: string) {
		const data = await this.invoke(`/post/${id}`);

		return data;
	}; // End getPost

	public async getPostByChapter(chapterId: string) {
		const data = await this.invoke(`/post?chapter=${chapterId}`);

		return data;
	}; // End getPostByChapter

	public async getPostByBook(bookId: string) {
		const data = await this.invoke(`/post?book=${bookId}`);

		return data;
	}; // End getPostByBook

	public async getPostByCharacter(characterId: string) {
		const data = await this.invoke(`/post?character=${characterId}`);

		return data;
	}; // End getPostByCharacter

	public async getPostByMovie(movieId: string) {
		const data = await this.invoke(`/post?movie=${movieId}`);

		return data;
	}; // End getPostByMovie

	public async getPostByQuote(quoteId: string) {
		const data = await this.invoke(`/post?quote=${quoteId}`);

		return data;
	}; // End getPostByQuote

	public async getPostByWeapon(weaponId: string) {
		const data = await this.invoke(`/post?weapon=${weaponId}`);

		return data;
	}; // End getPostByWeapon

	public async getPostByChapterAndBook(chapterId: string, bookId: string) {
		const data = await this.invoke(`/post?chapter=${chapterId}&book=${bookId}`);

		return data;
	}; // End getPostByChapterAndBook

	public async getPostByChapterAndCharacter(chapterId: string, characterId: string) {
		const data = await this.invoke(`/post?chapter=${chapterId}&character=${characterId}`);

		return data;
	}; // End getPostByChapterAndCharacter

	public async getPostByChapterAndMovie(chapterId: string, movieId: string) {
		const data = await this.invoke(`/post?chapter=${chapterId}&movie=${movieId}`);

		return data;
	}; // End getPostByChapterAndMovie


}