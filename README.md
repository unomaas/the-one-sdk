# Lord of the Rings SDK (@unomaas/the-one-sdk)

A lightweight TypeScript SDK for the Lord of the Rings API.



## Table of Contents

- [Installation](#installation)
- [File Structure](#file-structure)
- [API Documentation](#api-documentation)
  - [Books](#books)
  - [Chapters](#chapters)
  - [Characters](#characters)
  - [Movies](#movies)
  - [Quotes](#quotes)
- [TypeScript Types](#typescript-types)
- [Testing](#testing)
- [Quick Client Setup](#quick-client-setup)
- [Contributing](#contributing)



## Installation

To install the SDK, use npm:

```bash
npm install @unomaas/the-one-sdk
```

After installing, import the SDK in your TypeScript/JavaScript files:

```typescript
import { LotrSDK } from '@unomaas/the-one-sdk';
```

And instantiate it:
```typescript
const client = new LotrSDK({ apiKey: 'your-api-key', baseUrl: 'optional-base-url' });
```

You will need to register for your own API key at https://the-one-api.dev/sign-up.

If not provided, the baseUrl will default to https://the-one-api.dev/v2.



## File Structure
The relevant file structure for SDK is as follows:
```
.
└── sdk-demo/
    ├── src/
    │   ├── books/
    │   │   ├── books.index.ts
    │   │   ├── books.test.ts
    │   │   └── books.types.ts
    │   ├── chapters/
    │   │   ├── chapters.index.ts
    │   │   ├── chapters.test.ts
    │   │   └── chapters.types.ts
    │   ├── characters/
    │   │   ├── characters.index.ts
    │   │   ├── characters.test.ts
    │   │   └── characters.types.ts
    │   ├── movies/
    │   │   ├── movies.index.ts
    │   │   ├── movies.test.ts
    │   │   └── movies.types.ts
    │   └── quotes/
    │       ├── quotes.index.ts
    │       ├── quotes.test.ts
    │       └── quotes.types.ts
    ├── base.ts
    ├── index.ts
    ├── jest.config.js
    ├── package.json
    └── tsconfig.json
```



## API Documentation
Each category in the Lord of the Rings API (books, chapters, characters, movies, and quotes) has its own class in the SDK, each with two to three methods. For more details, you can refer to the specific typescript .types file for each category which provides the data model for the returned data.

### Books
```typescript
// ⬇ Get all books
const books = await client.books.getAllBooks();
// ⬇ Get a specific book by ID
const book = await client.books.getBookById('5cf5805fb53e011a64671582');
// ⬇ Get chapters from a specific book by ID
const chapters = await client.books.getBookChaptersById('5cf5805fb53e011a64671582');
```

### Chapters
```typescript
// ⬇ Get all chapters
const chapters = await client.chapters.getAllChapters();
// ⬇ Get a specific chapter by ID
const chapter = await client.chapters.getChapterById('6091b6d6d58360f988133ba1');
```

### Characters
```typescript
// ⬇ Get all characters
const characters = await client.characters.getAllCharacters();
// ⬇ Get a specific character by ID
const character = await client.characters.getCharacterById('5cd99d4bde30eff6ebccfbbe');
// ⬇ Get quotes from a specific character by ID
const quotes = await client.characters.getCharacterQuotesById('5cd99d4bde30eff6ebccfbbe');
```

### Movies
```typescript
// ⬇ Get all movies
const movies = await client.movies.getAllMovies();
// ⬇ Get a specific movie by ID
const movie = await client.movies.getMovieById('5cd95395de30eff6ebccde5b');
// ⬇ Get quotes from a specific movie by ID
const quotes = await client.movies.getMovieQuotesById('5cd95395de30eff6ebccde5b');
```

### Quotes
```typescript
// ⬇ Get all quotes
const quotes = await client.quotes.getAllQuotes();
// ⬇ Get a specific quote by ID
const quote = await client.quotes.getQuoteById('5cd96e05de30eff6ebcce7e9');
```



## TypeScript Types
Each category has its own TypeScript types.ts file, which defines the shape of the data returned by the API:
```typescript
import {
	Book,
	Chapter,
	Character,
	Movie,
	Quote
} from '@unomaas/the-one-sdk';
```



## Testing
With the repo cloned and codebase open, run the tests via Jest with the following command in your terminal:
```bash
npm run test
```



## Quick Client Setup
If you want to quickly test the SDK with minimal setup time, you can use the following code:

Create a new directory and initialize a new Node.js project:
```bash
mkdir lotr-sdk-demo && cd lotr-sdk-demo && npm init -y
```

Copy the below code into a file named `tsconfig.json` at root level:
```json
{
  "compilerOptions": {
    "module": "commonjs",
    "declaration": true,
    "removeComments": true,
    "allowSyntheticDefaultImports": true,
    "target": "es2017",
    "sourceMap": false,
    "outDir": "./dist",
    "baseUrl": "./",
    "incremental": true,
		"experimentalDecorators": true,
		"esModuleInterop": true,
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "test", "lib", "**/*spec.ts"]
}
```

Install the SDK:
```bash
npm install @unomaas/the-one-sdk
```

Copy the below code into a file named `src/app.ts`, which is setup to test and console.log all the endpoints:
```typescript
import {
	LotrSDK,
	Book,
	Chapter,
	Character,
	Movie,
	Quote
} from '@unomaas/the-one-sdk';

const client = new LotrSDK({
	apiKey: 'your-api-key', // (register for one at https://the-one-api.dev/sign-up),
	baseUrl: 'https://the-one-api.dev/v2'
}); // End client

//#region - Books API Endpoints: 
client.books.getAllBooks().then((books: Book[]) => {
	console.log('getAllBooks', { books });
});
client.books.getBookById('5cf5805fb53e011a64671582').then((book: Book) => {
	console.log('getBookById', { book });
});
client.books.getBookChaptersById('5cf5805fb53e011a64671582').then((chapters: Chapter[]) => {
	console.log('getBookChaptersById', { chapters });
});
//#endregion - Books API Endpoints.

//#region - Chapters API Endpoints:
client.chapters.getAllChapters().then((chapters: Chapter[]) => {
	console.log('getAllChapters', { chapters });
});
client.chapters.getChapterById('6091b6d6d58360f988133ba1').then((chapter: Chapter) => {
	console.log('getChapterById', { chapter });
});
//#endregion - Chapters API Endpoints.

//#region - Characters API Endpoints:
client.characters.getAllCharacters().then((characters: Character[]) => {
	console.log('getAllCharacters', { characters });
});
client.characters.getCharacterById('5cd99d4bde30eff6ebccfea0').then((character: Character) => {
	console.log('getCharacterById', { character });
});
client.characters.getCharacterQuotesById('5cd99d4bde30eff6ebccfea0').then((quotes: Quote[]) => {
	console.log('getCharacterQuotesById', { quotes });
});
//#endregion - Characters API Endpoints.

//#region - Movies API Endpoints:
client.movies.getAllMovies().then((movies: Movie[]) => {
	console.log('getAllMovies', { movies });
});
client.movies.getMovieById('5cd95395de30eff6ebccde5d').then((movie: Movie) => {
	console.log('getMovieById', { movie });
});
client.movies.getMovieQuotesById('5cd95395de30eff6ebccde5d').then((quotes: Quote[]) => {
	console.log('getMovieQuotesById', { quotes });
});
//#endregion - Movies API Endpoints.

//#region - Quotes API Endpoints:
client.quotes.getAllQuotes().then((quotes: Quote[]) => {
	console.log('getAllQuotes', { quotes });
});
client.quotes.getQuoteById('5cd96e05de30eff6ebccf0df').then((quote: Quote) => {
	console.log('getQuoteById', { quote });
});
//#endregion - Quotes API Endpoints.
```

Lastly, run the below code in your terminal:
```bash
tsc && node dist/app.js
```

You should see many lines of console logs in your terminal.  Cheers! 



## Contributing
Contributions are welcome! Please ensure your changes pass all existing tests before submitting a pull request. Run the tests with `npm run test`.