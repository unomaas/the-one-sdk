[@unomaas/the-one-sdk](../README.md) / [Exports](../modules.md) / [movies](../modules/movies.md) / Movies

# Class: Movies

[movies](../modules/movies.md).Movies

## Hierarchy

- [`Base`](base.Base.md)

  ↳ **`Movies`**

## Table of contents

### Constructors

- [constructor](movies.Movies.md#constructor)

### Methods

- [getAllMovies](movies.Movies.md#getallmovies)
- [getMovieById](movies.Movies.md#getmoviebyid)
- [getMovieQuotesById](movies.Movies.md#getmoviequotesbyid)
- [invoke](movies.Movies.md#invoke)

## Constructors

### constructor

• **new Movies**(`config`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `Config` |

#### Inherited from

[Base](base.Base.md).[constructor](base.Base.md#constructor)

#### Defined in

[base.ts:15](https://github.com/hatchways-community/99659d2d3c9f461e87d7a6dd57ac5dbe/blob/49d789f/src/base.ts#L15)

## Methods

### getAllMovies

▸ **getAllMovies**(): `Promise`<[`Movie`](../modules/movies_types.md#movie)[]\>

**`Description`**

Pings the LOTR API `/movie` endpoint and returns an array of Lord of the Rings movies.

**`Memberof`**

Movies

**`Example`**

```ts
const movies = await sdk.movies.getAllMovies();
console.log(movies);
```

#### Returns

`Promise`<[`Movie`](../modules/movies_types.md#movie)[]\>

#### Defined in

[movies/index.ts:19](https://github.com/hatchways-community/99659d2d3c9f461e87d7a6dd57ac5dbe/blob/49d789f/src/movies/index.ts#L19)

___

### getMovieById

▸ **getMovieById**(`id`): `Promise`<[`Movie`](../modules/movies_types.md#movie)\>

**`Description`**

Pings the LOTR API `/movie/{id}` endpoint and returns the requested Lord of the Rings movie.

**`Memberof`**

Movies

**`Example`**

```ts
const movie = await sdk.movies.getMovieById('5cd95395de30eff6ebccde5b');
console.log(movie);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The ID of the movie to retrieve. |

#### Returns

`Promise`<[`Movie`](../modules/movies_types.md#movie)\>

#### Defined in

[movies/index.ts:35](https://github.com/hatchways-community/99659d2d3c9f461e87d7a6dd57ac5dbe/blob/49d789f/src/movies/index.ts#L35)

___

### getMovieQuotesById

▸ **getMovieQuotesById**(`id`): `Promise`<[`Quote`](../modules/quotes_types.md#quote)[]\>

**`Description`**

Pings the LOTR API `/movie/{id}/quote` endpoint and returns an array of quotes from the requested Lord of the Rings movie.  Warning: Currently only works for the LOTR Trilogy (id: 5cd95395de30eff6ebccde5b || 5cd95395de30eff6ebccde5c || 5cd95395de30eff6ebccde5d).

**`Memberof`**

Quotes

**`Example`**

```ts
const quotes = await sdk.movies.getMovieQuotesById('5cd95395de30eff6ebccde5b');
console.log(quotes);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The ID of the movie to retrieve quotes from. |

#### Returns

`Promise`<[`Quote`](../modules/quotes_types.md#quote)[]\>

#### Defined in

[movies/index.ts:51](https://github.com/hatchways-community/99659d2d3c9f461e87d7a6dd57ac5dbe/blob/49d789f/src/movies/index.ts#L51)

___

### invoke

▸ `Protected` **invoke**<`T`\>(`endpoint`, `options?`): `Promise`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | `string` |
| `options?` | `RequestInit` |

#### Returns

`Promise`<`T`\>

#### Inherited from

[Base](base.Base.md).[invoke](base.Base.md#invoke)

#### Defined in

[base.ts:21](https://github.com/hatchways-community/99659d2d3c9f461e87d7a6dd57ac5dbe/blob/49d789f/src/base.ts#L21)
