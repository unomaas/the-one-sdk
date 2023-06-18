<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Classes](#classes)
  - [Class: Base](#class-base)
    - [Hierarchy](#hierarchy)
    - [Table of contents](#table-of-contents)
    - [Constructors](#constructors)
    - [Properties](#properties)
    - [Methods](#methods)
  - [Class: Books](#class-books)
    - [Hierarchy](#hierarchy-1)
    - [Table of contents](#table-of-contents-1)
    - [Constructors](#constructors-1)
    - [Methods](#methods-1)
  - [Class: Chapters](#class-chapters)
    - [Hierarchy](#hierarchy-2)
    - [Table of contents](#table-of-contents-2)
    - [Constructors](#constructors-2)
    - [Methods](#methods-2)
  - [Class: Characters](#class-characters)
    - [Hierarchy](#hierarchy-3)
    - [Table of contents](#table-of-contents-3)
    - [Constructors](#constructors-3)
    - [Methods](#methods-3)
  - [Class: LotrSDK](#class-lotrsdk)
    - [Hierarchy](#hierarchy-4)
    - [Table of contents](#table-of-contents-4)
    - [Constructors](#constructors-4)
    - [Properties](#properties-1)
    - [Methods](#methods-4)
  - [Class: Movies](#class-movies)
    - [Hierarchy](#hierarchy-5)
    - [Table of contents](#table-of-contents-5)
    - [Constructors](#constructors-5)
    - [Methods](#methods-5)
  - [Class: Quotes](#class-quotes)
    - [Hierarchy](#hierarchy-6)
    - [Table of contents](#table-of-contents-6)
    - [Constructors](#constructors-6)
    - [Methods](#methods-6)
- [@unomaas/the-one-sdk](#unomaasthe-one-sdk)
  - [Table of contents](#table-of-contents-7)
    - [Modules](#modules)
- [Modules](#modules-1)
  - [Module: base](#module-base)
    - [Table of contents](#table-of-contents-8)
  - [Module: books](#module-books)
    - [Table of contents](#table-of-contents-9)
    - [References](#references)
  - [Module: books](#module-books-1)
    - [Table of contents](#table-of-contents-10)
  - [Module: books/types](#module-bookstypes)
    - [Table of contents](#table-of-contents-11)
    - [Type Aliases](#type-aliases)
  - [Module: chapters](#module-chapters)
    - [Table of contents](#table-of-contents-12)
    - [References](#references-1)
  - [Module: chapters](#module-chapters-1)
    - [Table of contents](#table-of-contents-13)
  - [Module: chapters/types](#module-chapterstypes)
    - [Table of contents](#table-of-contents-14)
    - [Type Aliases](#type-aliases-1)
  - [Module: characters](#module-characters)
    - [Table of contents](#table-of-contents-15)
    - [References](#references-2)
  - [Module: characters](#module-characters-1)
    - [Table of contents](#table-of-contents-16)
  - [Module: characters/types](#module-characterstypes)
    - [Table of contents](#table-of-contents-17)
    - [Type Aliases](#type-aliases-2)
  - [Module: index](#module-index)
    - [Table of contents](#table-of-contents-18)
  - [Module: movies](#module-movies)
    - [Table of contents](#table-of-contents-19)
    - [References](#references-3)
  - [Module: movies](#module-movies-1)
    - [Table of contents](#table-of-contents-20)
  - [Module: movies/types](#module-moviestypes)
    - [Table of contents](#table-of-contents-21)
    - [Type Aliases](#type-aliases-3)
  - [Module: quotes](#module-quotes)
    - [Table of contents](#table-of-contents-22)
    - [References](#references-4)
  - [Module: quotes](#module-quotes-1)
    - [Table of contents](#table-of-contents-23)
  - [Module: quotes/types](#module-quotestypes)
    - [Table of contents](#table-of-contents-24)
    - [Type Aliases](#type-aliases-4)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


<a name="readmemd"></a>

@unomaas/the-one-sdk / [Exports](#modulesmd)

# Classes


<a name="classesbasebasemd"></a>

[@unomaas/the-one-sdk](#readmemd) / [Exports](#modulesmd) / [base](#modulesbasemd) / Base

## Class: Base

[base](#modulesbasemd).Base

### Hierarchy

- **`Base`**

  ↳ [`LotrSDK`](#classesindexlotrsdkmd)

  ↳ [`Books`](#classesbooksbooksmd)

  ↳ [`Chapters`](#classeschapterschaptersmd)

  ↳ [`Characters`](#classescharacterscharactersmd)

  ↳ [`Movies`](#classesmoviesmoviesmd)

  ↳ [`Quotes`](#classesquotesquotesmd)

### Table of contents

#### Constructors

- [constructor](#constructor)

#### Properties

- [apiKey](#apikey)
- [baseUrl](#baseurl)

#### Methods

- [invoke](#invoke)

### Constructors

#### constructor

• **new Base**(`config`)

##### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `Config` |

##### Defined in

[base.ts:15](https://github.com/hatchways-community/99659d2d3c9f461e87d7a6dd57ac5dbe/blob/7e7948f/src/base.ts#L15)

### Properties

#### apiKey

• `Private` **apiKey**: `string`

##### Defined in

[base.ts:11](https://github.com/hatchways-community/99659d2d3c9f461e87d7a6dd57ac5dbe/blob/7e7948f/src/base.ts#L11)

___

#### baseUrl

• `Private` **baseUrl**: `string`

##### Defined in

[base.ts:12](https://github.com/hatchways-community/99659d2d3c9f461e87d7a6dd57ac5dbe/blob/7e7948f/src/base.ts#L12)

### Methods

#### invoke

▸ `Protected` **invoke**<`T`\>(`endpoint`, `options?`): `Promise`<`T`\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | `string` |
| `options?` | `RequestInit` |

##### Returns

`Promise`<`T`\>

##### Defined in

[base.ts:21](https://github.com/hatchways-community/99659d2d3c9f461e87d7a6dd57ac5dbe/blob/7e7948f/src/base.ts#L21)


<a name="classesbooksbooksmd"></a>

[@unomaas/the-one-sdk](#readmemd) / [Exports](#modulesmd) / [books](#modulesbooksmd) / Books

## Class: Books

[books](#modulesbooksmd).Books

### Hierarchy

- [`Base`](#classesbasebasemd)

  ↳ **`Books`**

### Table of contents

#### Constructors

- [constructor](#constructor)

#### Methods

- [getAllBooks](#getallbooks)
- [getBookById](#getbookbyid)
- [getBookChaptersById](#getbookchaptersbyid)
- [invoke](#invoke)

### Constructors

#### constructor

• **new Books**(`config`)

##### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `Config` |

##### Inherited from

[Base](#classesbasebasemd).[constructor](#constructor)

##### Defined in

[base.ts:15](https://github.com/hatchways-community/99659d2d3c9f461e87d7a6dd57ac5dbe/blob/7e7948f/src/base.ts#L15)

### Methods

#### getAllBooks

▸ **getAllBooks**(): `Promise`<[`Book`](#book)[]\>

**`Description`**

Pings the LOTR API `/book` endpoint and returns an array of Lord of the Rings books.

**`Memberof`**

Books

**`Example`**

```ts
const books = await sdk.books.getAllBooks();
console.log(books);
```

##### Returns

`Promise`<[`Book`](#book)[]\>

##### Defined in

[books/index.ts:19](https://github.com/hatchways-community/99659d2d3c9f461e87d7a6dd57ac5dbe/blob/7e7948f/src/books/index.ts#L19)

___

#### getBookById

▸ **getBookById**(`id`): `Promise`<[`Book`](#book)\>

**`Description`**

Pings the LOTR API `/book/{id}` endpoint and returns the requested Lord of the Rings book.

**`Memberof`**

Books

**`Example`**

```ts
const book = await sdk.books.getBookById('5cf5805fb53e011a64671582');
console.log(book);
```

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The ID of the book to retrieve. |

##### Returns

`Promise`<[`Book`](#book)\>

##### Defined in

[books/index.ts:35](https://github.com/hatchways-community/99659d2d3c9f461e87d7a6dd57ac5dbe/blob/7e7948f/src/books/index.ts#L35)

___

#### getBookChaptersById

▸ **getBookChaptersById**(`id`): `Promise`<[`Chapter`](#chapter)[]\>

**`Description`**

Pings the LOTR API `/book/{id}/chapter` endpoint and returns an array of chapters from the requested Lord of the Rings book.

**`Memberof`**

Books

**`Example`**

```ts
const chapter = await sdk.books.getBookChaptersById('5cf5805fb53e011a64671582');
console.log(chapter);
```

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The ID of the book to retrieve chapters from. |

##### Returns

`Promise`<[`Chapter`](#chapter)[]\>

##### Defined in

[books/index.ts:51](https://github.com/hatchways-community/99659d2d3c9f461e87d7a6dd57ac5dbe/blob/7e7948f/src/books/index.ts#L51)

___

#### invoke

▸ `Protected` **invoke**<`T`\>(`endpoint`, `options?`): `Promise`<`T`\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | `string` |
| `options?` | `RequestInit` |

##### Returns

`Promise`<`T`\>

##### Inherited from

[Base](#classesbasebasemd).[invoke](#invoke)

##### Defined in

[base.ts:21](https://github.com/hatchways-community/99659d2d3c9f461e87d7a6dd57ac5dbe/blob/7e7948f/src/base.ts#L21)


<a name="classeschapterschaptersmd"></a>

[@unomaas/the-one-sdk](#readmemd) / [Exports](#modulesmd) / [chapters](#moduleschaptersmd) / Chapters

## Class: Chapters

[chapters](#moduleschaptersmd).Chapters

### Hierarchy

- [`Base`](#classesbasebasemd)

  ↳ **`Chapters`**

### Table of contents

#### Constructors

- [constructor](#constructor)

#### Methods

- [getAllChapters](#getallchapters)
- [getChapterById](#getchapterbyid)
- [invoke](#invoke)

### Constructors

#### constructor

• **new Chapters**(`config`)

##### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `Config` |

##### Inherited from

[Base](#classesbasebasemd).[constructor](#constructor)

##### Defined in

[base.ts:15](https://github.com/hatchways-community/99659d2d3c9f461e87d7a6dd57ac5dbe/blob/7e7948f/src/base.ts#L15)

### Methods

#### getAllChapters

▸ **getAllChapters**(): `Promise`<[`Chapter`](#chapter)[]\>

**`Description`**

Pings the LOTR API `/chapter` endpoint and returns an array of Lord of the Rings chapters.

**`Memberof`**

Chapters

**`Example`**

```ts
const chapters = await sdk.chapters.getAllChapters();
console.log(chapters);
```

##### Returns

`Promise`<[`Chapter`](#chapter)[]\>

##### Defined in

[chapters/index.ts:18](https://github.com/hatchways-community/99659d2d3c9f461e87d7a6dd57ac5dbe/blob/7e7948f/src/chapters/index.ts#L18)

___

#### getChapterById

▸ **getChapterById**(`id`): `Promise`<[`Chapter`](#chapter)\>

**`Description`**

Pings the LOTR API `/chapter/{id}` endpoint and returns the requested Lord of the Rings chapter.

**`Memberof`**

Chapters

**`Example`**

```ts
const chapter = await sdk.chapters.getChapterById('6091b6d6d58360f988133ba1');
console.log(chapter);
```

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The ID of the chapter to retrieve. |

##### Returns

`Promise`<[`Chapter`](#chapter)\>

##### Defined in

[chapters/index.ts:34](https://github.com/hatchways-community/99659d2d3c9f461e87d7a6dd57ac5dbe/blob/7e7948f/src/chapters/index.ts#L34)

___

#### invoke

▸ `Protected` **invoke**<`T`\>(`endpoint`, `options?`): `Promise`<`T`\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | `string` |
| `options?` | `RequestInit` |

##### Returns

`Promise`<`T`\>

##### Inherited from

[Base](#classesbasebasemd).[invoke](#invoke)

##### Defined in

[base.ts:21](https://github.com/hatchways-community/99659d2d3c9f461e87d7a6dd57ac5dbe/blob/7e7948f/src/base.ts#L21)


<a name="classescharacterscharactersmd"></a>

[@unomaas/the-one-sdk](#readmemd) / [Exports](#modulesmd) / [characters](#modulescharactersmd) / Characters

## Class: Characters

[characters](#modulescharactersmd).Characters

### Hierarchy

- [`Base`](#classesbasebasemd)

  ↳ **`Characters`**

### Table of contents

#### Constructors

- [constructor](#constructor)

#### Methods

- [getAllCharacters](#getallcharacters)
- [getCharacterById](#getcharacterbyid)
- [getCharacterQuotesById](#getcharacterquotesbyid)
- [invoke](#invoke)

### Constructors

#### constructor

• **new Characters**(`config`)

##### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `Config` |

##### Inherited from

[Base](#classesbasebasemd).[constructor](#constructor)

##### Defined in

[base.ts:15](https://github.com/hatchways-community/99659d2d3c9f461e87d7a6dd57ac5dbe/blob/7e7948f/src/base.ts#L15)

### Methods

#### getAllCharacters

▸ **getAllCharacters**(): `Promise`<[`Character`](#character)[]\>

**`Description`**

Pings the LOTR API `/character` endpoint and returns an array of Lord of the Rings characters.

**`Memberof`**

Characters

**`Example`**

```ts
const characters = await sdk.characters.getAllCharacters();
console.log(characters);
```

##### Returns

`Promise`<[`Character`](#character)[]\>

##### Defined in

[characters/index.ts:19](https://github.com/hatchways-community/99659d2d3c9f461e87d7a6dd57ac5dbe/blob/7e7948f/src/characters/index.ts#L19)

___

#### getCharacterById

▸ **getCharacterById**(`id`): `Promise`<[`Character`](#character)\>

**`Description`**

Pings the LOTR API `/character/{id}` endpoint and returns the requested Lord of the Rings character.

**`Memberof`**

Characters

**`Example`**

```ts
const character = await sdk.characters.getCharacterById('5cd99d4bde30eff6ebccfbbe');
console.log(character);
```

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The ID of the character to retrieve. |

##### Returns

`Promise`<[`Character`](#character)\>

##### Defined in

[characters/index.ts:35](https://github.com/hatchways-community/99659d2d3c9f461e87d7a6dd57ac5dbe/blob/7e7948f/src/characters/index.ts#L35)

___

#### getCharacterQuotesById

▸ **getCharacterQuotesById**(`id`): `Promise`<[`Quote`](#quote)[]\>

**`Description`**

Pings the LOTR API `/character/{id}/quote` endpoint and returns an array of quotes from the requested Lord of the Rings character.

**`Memberof`**

Quotes

**`Example`**

```ts
const quotes = await sdk.characters.getCharacterQuotesById('5cd99d4bde30eff6ebccfbbe');
console.log(quotes);
```

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The ID of the character to retrieve quotes from. |

##### Returns

`Promise`<[`Quote`](#quote)[]\>

##### Defined in

[characters/index.ts:51](https://github.com/hatchways-community/99659d2d3c9f461e87d7a6dd57ac5dbe/blob/7e7948f/src/characters/index.ts#L51)

___

#### invoke

▸ `Protected` **invoke**<`T`\>(`endpoint`, `options?`): `Promise`<`T`\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | `string` |
| `options?` | `RequestInit` |

##### Returns

`Promise`<`T`\>

##### Inherited from

[Base](#classesbasebasemd).[invoke](#invoke)

##### Defined in

[base.ts:21](https://github.com/hatchways-community/99659d2d3c9f461e87d7a6dd57ac5dbe/blob/7e7948f/src/base.ts#L21)


<a name="classesindexlotrsdkmd"></a>

[@unomaas/the-one-sdk](#readmemd) / [Exports](#modulesmd) / [index](#modulesindexmd) / LotrSDK

## Class: LotrSDK

[index](#modulesindexmd).LotrSDK

### Hierarchy

- [`Base`](#classesbasebasemd)

  ↳ **`LotrSDK`**

### Table of contents

#### Constructors

- [constructor](#constructor)

#### Properties

- [books](#books)
- [chapters](#chapters)
- [characters](#characters)
- [movies](#movies)
- [quotes](#quotes)

#### Methods

- [invoke](#invoke)

### Constructors

#### constructor

• **new LotrSDK**(`config`)

##### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `Object` |
| `config.apiKey` | `string` |
| `config.baseUrl` | `string` |

##### Overrides

[Base](#classesbasebasemd).[constructor](#constructor)

##### Defined in

[index.ts:17](https://github.com/hatchways-community/99659d2d3c9f461e87d7a6dd57ac5dbe/blob/7e7948f/src/index.ts#L17)

### Properties

#### books

• **books**: [`Books`](#classesbooksbooksmd)

##### Defined in

[index.ts:11](https://github.com/hatchways-community/99659d2d3c9f461e87d7a6dd57ac5dbe/blob/7e7948f/src/index.ts#L11)

___

#### chapters

• **chapters**: [`Chapters`](#classeschapterschaptersmd)

##### Defined in

[index.ts:12](https://github.com/hatchways-community/99659d2d3c9f461e87d7a6dd57ac5dbe/blob/7e7948f/src/index.ts#L12)

___

#### characters

• **characters**: [`Characters`](#classescharacterscharactersmd)

##### Defined in

[index.ts:13](https://github.com/hatchways-community/99659d2d3c9f461e87d7a6dd57ac5dbe/blob/7e7948f/src/index.ts#L13)

___

#### movies

• **movies**: [`Movies`](#classesmoviesmoviesmd)

##### Defined in

[index.ts:14](https://github.com/hatchways-community/99659d2d3c9f461e87d7a6dd57ac5dbe/blob/7e7948f/src/index.ts#L14)

___

#### quotes

• **quotes**: [`Quotes`](#classesquotesquotesmd)

##### Defined in

[index.ts:15](https://github.com/hatchways-community/99659d2d3c9f461e87d7a6dd57ac5dbe/blob/7e7948f/src/index.ts#L15)

### Methods

#### invoke

▸ `Protected` **invoke**<`T`\>(`endpoint`, `options?`): `Promise`<`T`\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | `string` |
| `options?` | `RequestInit` |

##### Returns

`Promise`<`T`\>

##### Inherited from

[Base](#classesbasebasemd).[invoke](#invoke)

##### Defined in

[base.ts:21](https://github.com/hatchways-community/99659d2d3c9f461e87d7a6dd57ac5dbe/blob/7e7948f/src/base.ts#L21)


<a name="classesmoviesmoviesmd"></a>

[@unomaas/the-one-sdk](#readmemd) / [Exports](#modulesmd) / [movies](#modulesmoviesmd) / Movies

## Class: Movies

[movies](#modulesmoviesmd).Movies

### Hierarchy

- [`Base`](#classesbasebasemd)

  ↳ **`Movies`**

### Table of contents

#### Constructors

- [constructor](#constructor)

#### Methods

- [getAllMovies](#getallmovies)
- [getMovieById](#getmoviebyid)
- [getMovieQuotesById](#getmoviequotesbyid)
- [invoke](#invoke)

### Constructors

#### constructor

• **new Movies**(`config`)

##### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `Config` |

##### Inherited from

[Base](#classesbasebasemd).[constructor](#constructor)

##### Defined in

[base.ts:15](https://github.com/hatchways-community/99659d2d3c9f461e87d7a6dd57ac5dbe/blob/7e7948f/src/base.ts#L15)

### Methods

#### getAllMovies

▸ **getAllMovies**(): `Promise`<[`Movie`](#movie)[]\>

**`Description`**

Pings the LOTR API `/movie` endpoint and returns an array of Lord of the Rings movies.

**`Memberof`**

Movies

**`Example`**

```ts
const movies = await sdk.movies.getAllMovies();
console.log(movies);
```

##### Returns

`Promise`<[`Movie`](#movie)[]\>

##### Defined in

[movies/index.ts:19](https://github.com/hatchways-community/99659d2d3c9f461e87d7a6dd57ac5dbe/blob/7e7948f/src/movies/index.ts#L19)

___

#### getMovieById

▸ **getMovieById**(`id`): `Promise`<[`Movie`](#movie)\>

**`Description`**

Pings the LOTR API `/movie/{id}` endpoint and returns the requested Lord of the Rings movie.

**`Memberof`**

Movies

**`Example`**

```ts
const movie = await sdk.movies.getMovieById('5cd95395de30eff6ebccde5b');
console.log(movie);
```

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The ID of the movie to retrieve. |

##### Returns

`Promise`<[`Movie`](#movie)\>

##### Defined in

[movies/index.ts:35](https://github.com/hatchways-community/99659d2d3c9f461e87d7a6dd57ac5dbe/blob/7e7948f/src/movies/index.ts#L35)

___

#### getMovieQuotesById

▸ **getMovieQuotesById**(`id`): `Promise`<[`Quote`](#quote)[]\>

**`Description`**

Pings the LOTR API `/movie/{id}/quote` endpoint and returns an array of quotes from the requested Lord of the Rings movie.  Warning: Currently only works for the LOTR Trilogy (id: 5cd95395de30eff6ebccde5b || 5cd95395de30eff6ebccde5c || 5cd95395de30eff6ebccde5d).

**`Memberof`**

Quotes

**`Example`**

```ts
const quotes = await sdk.movies.getMovieQuotesById('5cd95395de30eff6ebccde5b');
console.log(quotes);
```

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The ID of the movie to retrieve quotes from. |

##### Returns

`Promise`<[`Quote`](#quote)[]\>

##### Defined in

[movies/index.ts:51](https://github.com/hatchways-community/99659d2d3c9f461e87d7a6dd57ac5dbe/blob/7e7948f/src/movies/index.ts#L51)

___

#### invoke

▸ `Protected` **invoke**<`T`\>(`endpoint`, `options?`): `Promise`<`T`\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | `string` |
| `options?` | `RequestInit` |

##### Returns

`Promise`<`T`\>

##### Inherited from

[Base](#classesbasebasemd).[invoke](#invoke)

##### Defined in

[base.ts:21](https://github.com/hatchways-community/99659d2d3c9f461e87d7a6dd57ac5dbe/blob/7e7948f/src/base.ts#L21)


<a name="classesquotesquotesmd"></a>

[@unomaas/the-one-sdk](#readmemd) / [Exports](#modulesmd) / [quotes](#modulesquotesmd) / Quotes

## Class: Quotes

[quotes](#modulesquotesmd).Quotes

### Hierarchy

- [`Base`](#classesbasebasemd)

  ↳ **`Quotes`**

### Table of contents

#### Constructors

- [constructor](#constructor)

#### Methods

- [getAllQuotes](#getallquotes)
- [getQuoteById](#getquotebyid)
- [invoke](#invoke)

### Constructors

#### constructor

• **new Quotes**(`config`)

##### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `Config` |

##### Inherited from

[Base](#classesbasebasemd).[constructor](#constructor)

##### Defined in

[base.ts:15](https://github.com/hatchways-community/99659d2d3c9f461e87d7a6dd57ac5dbe/blob/7e7948f/src/base.ts#L15)

### Methods

#### getAllQuotes

▸ **getAllQuotes**(): `Promise`<[`Quote`](#quote)[]\>

**`Description`**

Pings the LOTR API `/quote` endpoint and returns an array of Lord of the Rings quotes.

**`Memberof`**

Quotes

**`Example`**

```ts
const quotes = await sdk.quotes.getAllQuotes();
console.log(quotes);
```

##### Returns

`Promise`<[`Quote`](#quote)[]\>

##### Defined in

[quotes/index.ts:18](https://github.com/hatchways-community/99659d2d3c9f461e87d7a6dd57ac5dbe/blob/7e7948f/src/quotes/index.ts#L18)

___

#### getQuoteById

▸ **getQuoteById**(`id`): `Promise`<[`Quote`](#quote)\>

**`Description`**

Pings the LOTR API `/quote/{id}` endpoint and returns the requested Lord of the Rings quote.

**`Memberof`**

Quotes

**`Example`**

```ts
const quote = await sdk.quotes.getQuoteById('5cd96e05de30eff6ebcce7e9');
console.log(quote);
```

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The ID of the quote to retrieve. |

##### Returns

`Promise`<[`Quote`](#quote)\>

##### Defined in

[quotes/index.ts:34](https://github.com/hatchways-community/99659d2d3c9f461e87d7a6dd57ac5dbe/blob/7e7948f/src/quotes/index.ts#L34)

___

#### invoke

▸ `Protected` **invoke**<`T`\>(`endpoint`, `options?`): `Promise`<`T`\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | `string` |
| `options?` | `RequestInit` |

##### Returns

`Promise`<`T`\>

##### Inherited from

[Base](#classesbasebasemd).[invoke](#invoke)

##### Defined in

[base.ts:21](https://github.com/hatchways-community/99659d2d3c9f461e87d7a6dd57ac5dbe/blob/7e7948f/src/base.ts#L21)


<a name="modulesmd"></a>

[@unomaas/the-one-sdk](#readmemd) / Exports

# @unomaas/the-one-sdk

## Table of contents

### Modules

- [base](#modulesbasemd)
- [books](#modulesbooksmd)
- [books](#modulesbooks-1md)
- [books/types](#modulesbooks_typesmd)
- [chapters](#moduleschaptersmd)
- [chapters](#moduleschapters-1md)
- [chapters/types](#moduleschapters_typesmd)
- [characters](#modulescharactersmd)
- [characters](#modulescharacters-1md)
- [characters/types](#modulescharacters_typesmd)
- [index](#modulesindexmd)
- [movies](#modulesmoviesmd)
- [movies](#modulesmovies-1md)
- [movies/types](#modulesmovies_typesmd)
- [quotes](#modulesquotesmd)
- [quotes](#modulesquotes-1md)
- [quotes/types](#modulesquotes_typesmd)

# Modules


<a name="modulesbasemd"></a>

[@unomaas/the-one-sdk](#readmemd) / [Exports](#modulesmd) / base

## Module: base

### Table of contents

#### Classes

- [Base](#classesbasebasemd)


<a name="modulesbooks-1md"></a>

[@unomaas/the-one-sdk](#readmemd) / [Exports](#modulesmd) / books

## Module: books

### Table of contents

#### References

- [Books](#books)

### References

#### Books

Re-exports [Books](#classesbooksbooksmd)


<a name="modulesbooksmd"></a>

[@unomaas/the-one-sdk](#readmemd) / [Exports](#modulesmd) / books

## Module: books

### Table of contents

#### Classes

- [Books](#classesbooksbooksmd)


<a name="modulesbooks_typesmd"></a>

[@unomaas/the-one-sdk](#readmemd) / [Exports](#modulesmd) / books/types

## Module: books/types

### Table of contents

#### Type Aliases

- [Book](#book)

### Type Aliases

#### Book

Ƭ **Book**: `Object`

##### Type declaration

| Name | Type |
| :------ | :------ |
| `_id` | `string` |
| `name` | `string` |

##### Defined in

[books/types.ts:2](https://github.com/hatchways-community/99659d2d3c9f461e87d7a6dd57ac5dbe/blob/7e7948f/src/books/types.ts#L2)


<a name="moduleschapters-1md"></a>

[@unomaas/the-one-sdk](#readmemd) / [Exports](#modulesmd) / chapters

## Module: chapters

### Table of contents

#### References

- [Chapters](#chapters)

### References

#### Chapters

Re-exports [Chapters](#classeschapterschaptersmd)


<a name="moduleschaptersmd"></a>

[@unomaas/the-one-sdk](#readmemd) / [Exports](#modulesmd) / chapters

## Module: chapters

### Table of contents

#### Classes

- [Chapters](#classeschapterschaptersmd)


<a name="moduleschapters_typesmd"></a>

[@unomaas/the-one-sdk](#readmemd) / [Exports](#modulesmd) / chapters/types

## Module: chapters/types

### Table of contents

#### Type Aliases

- [Chapter](#chapter)

### Type Aliases

#### Chapter

Ƭ **Chapter**: `Object`

##### Type declaration

| Name | Type |
| :------ | :------ |
| `_id` | `string` |
| `book?` | `string` |
| `chapterName` | `string` |

##### Defined in

[chapters/types.ts:2](https://github.com/hatchways-community/99659d2d3c9f461e87d7a6dd57ac5dbe/blob/7e7948f/src/chapters/types.ts#L2)


<a name="modulescharacters-1md"></a>

[@unomaas/the-one-sdk](#readmemd) / [Exports](#modulesmd) / characters

## Module: characters

### Table of contents

#### References

- [Characters](#characters)

### References

#### Characters

Re-exports [Characters](#classescharacterscharactersmd)


<a name="modulescharactersmd"></a>

[@unomaas/the-one-sdk](#readmemd) / [Exports](#modulesmd) / characters

## Module: characters

### Table of contents

#### Classes

- [Characters](#classescharacterscharactersmd)


<a name="modulescharacters_typesmd"></a>

[@unomaas/the-one-sdk](#readmemd) / [Exports](#modulesmd) / characters/types

## Module: characters/types

### Table of contents

#### Type Aliases

- [Character](#character)

### Type Aliases

#### Character

Ƭ **Character**: `Object`

##### Type declaration

| Name | Type |
| :------ | :------ |
| `_id` | `string` |
| `birth` | `string` |
| `death` | `string` |
| `gender` | `string` |
| `hair` | `string` |
| `height` | `string` |
| `name` | `string` |
| `race` | `string` |
| `realm` | `string` |
| `spouse` | `string` |
| `wikiUrl` | `string` |

##### Defined in

[characters/types.ts:2](https://github.com/hatchways-community/99659d2d3c9f461e87d7a6dd57ac5dbe/blob/7e7948f/src/characters/types.ts#L2)


<a name="modulesindexmd"></a>

[@unomaas/the-one-sdk](#readmemd) / [Exports](#modulesmd) / index

## Module: index

### Table of contents

#### Classes

- [LotrSDK](#classesindexlotrsdkmd)


<a name="modulesmovies-1md"></a>

[@unomaas/the-one-sdk](#readmemd) / [Exports](#modulesmd) / movies

## Module: movies

### Table of contents

#### References

- [Movies](#movies)

### References

#### Movies

Re-exports [Movies](#classesmoviesmoviesmd)


<a name="modulesmoviesmd"></a>

[@unomaas/the-one-sdk](#readmemd) / [Exports](#modulesmd) / movies

## Module: movies

### Table of contents

#### Classes

- [Movies](#classesmoviesmoviesmd)


<a name="modulesmovies_typesmd"></a>

[@unomaas/the-one-sdk](#readmemd) / [Exports](#modulesmd) / movies/types

## Module: movies/types

### Table of contents

#### Type Aliases

- [Movie](#movie)

### Type Aliases

#### Movie

Ƭ **Movie**: `Object`

##### Type declaration

| Name | Type |
| :------ | :------ |
| `_id` | `string` |
| `academyAwardNominations` | `number` |
| `academyAwardWins` | `number` |
| `boxOfficeRevenueInMillions` | `number` |
| `budgetInMillions` | `number` |
| `name` | `string` |
| `rottenTomatoesScore` | `number` |
| `runtimeInMinutes` | `number` |

##### Defined in

[movies/types.ts:2](https://github.com/hatchways-community/99659d2d3c9f461e87d7a6dd57ac5dbe/blob/7e7948f/src/movies/types.ts#L2)


<a name="modulesquotes-1md"></a>

[@unomaas/the-one-sdk](#readmemd) / [Exports](#modulesmd) / quotes

## Module: quotes

### Table of contents

#### References

- [Quotes](#quotes)

### References

#### Quotes

Re-exports [Quotes](#classesquotesquotesmd)


<a name="modulesquotesmd"></a>

[@unomaas/the-one-sdk](#readmemd) / [Exports](#modulesmd) / quotes

## Module: quotes

### Table of contents

#### Classes

- [Quotes](#classesquotesquotesmd)


<a name="modulesquotes_typesmd"></a>

[@unomaas/the-one-sdk](#readmemd) / [Exports](#modulesmd) / quotes/types

## Module: quotes/types

### Table of contents

#### Type Aliases

- [Quote](#quote)

### Type Aliases

#### Quote

Ƭ **Quote**: `Object`

##### Type declaration

| Name | Type |
| :------ | :------ |
| `_id` | `string` |
| `character` | `string` |
| `dialog` | `string` |
| `id` | `string` |
| `movie` | `string` |

##### Defined in

[quotes/types.ts:2](https://github.com/hatchways-community/99659d2d3c9f461e87d7a6dd57ac5dbe/blob/7e7948f/src/quotes/types.ts#L2)
