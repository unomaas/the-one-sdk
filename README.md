# Lord of the Rings SDK (@unomaas/the-one-client)

A lightweight TypeScript SDK for the Lord of the Rings API.



## Table of Contents

- [Installation](#installation)
- [Testing](#testing)
- [API Documentation](#api-documentation)
  - [Books](#books)
  - [Chapters](#chapters)
  - [Characters](#characters)
  - [Movies](#movies)
  - [Quotes](#quotes)
- [TypeScript Types](#typescript-types)
- [Contributing](#contributing)



## Installation

To install the SDK, use npm:

```bash
npm install @unomaas/the-one-client
```

After installing, import the SDK in your TypeScript/JavaScript files:

```typescript
import { LotrSDK } from '@unomaas/the-one-client';
```

And instantiate it:
```typescript
const client = new LotrSDK({ apiKey: 'your-api-key', baseUrl: 'optional-base-url' });
```

You will need to register for your own API key at https://the-one-api.dev/sign-up.

If not provided, the baseUrl will default to https://the-one-api.dev/v2.



## Testing
Run the tests via Jest with the following command:
```bash
npm run test
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



## Contributing
Contributions are welcome! Please ensure your changes pass all existing tests before submitting a pull request. Run the tests with `npm run test`.