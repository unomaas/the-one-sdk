[@unomaas/the-one-sdk](../README.md) / [Exports](../modules.md) / [books](../modules/books.md) / Books

# Class: Books

[books](../modules/books.md).Books

## Hierarchy

- [`Base`](base.Base.md)

  ↳ **`Books`**

## Table of contents

### Constructors

- [constructor](books.Books.md#constructor)

### Methods

- [getAllBooks](books.Books.md#getallbooks)
- [getBookById](books.Books.md#getbookbyid)
- [getBookChaptersById](books.Books.md#getbookchaptersbyid)
- [invoke](books.Books.md#invoke)

## Constructors

### constructor

• **new Books**(`config`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `Config` |

#### Inherited from

[Base](base.Base.md).[constructor](base.Base.md#constructor)

#### Defined in

[base.ts:15](https://github.com/hatchways-community/99659d2d3c9f461e87d7a6dd57ac5dbe/blob/49d789f/src/base.ts#L15)

## Methods

### getAllBooks

▸ **getAllBooks**(): `Promise`<[`Book`](../modules/books_types.md#book)[]\>

**`Description`**

Pings the LOTR API `/book` endpoint and returns an array of Lord of the Rings books.

**`Memberof`**

Books

**`Example`**

```ts
const books = await sdk.books.getAllBooks();
console.log(books);
```

#### Returns

`Promise`<[`Book`](../modules/books_types.md#book)[]\>

#### Defined in

[books/index.ts:19](https://github.com/hatchways-community/99659d2d3c9f461e87d7a6dd57ac5dbe/blob/49d789f/src/books/index.ts#L19)

___

### getBookById

▸ **getBookById**(`id`): `Promise`<[`Book`](../modules/books_types.md#book)\>

**`Description`**

Pings the LOTR API `/book/{id}` endpoint and returns the requested Lord of the Rings book.

**`Memberof`**

Books

**`Example`**

```ts
const book = await sdk.books.getBookById('5cf5805fb53e011a64671582');
console.log(book);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The ID of the book to retrieve. |

#### Returns

`Promise`<[`Book`](../modules/books_types.md#book)\>

#### Defined in

[books/index.ts:35](https://github.com/hatchways-community/99659d2d3c9f461e87d7a6dd57ac5dbe/blob/49d789f/src/books/index.ts#L35)

___

### getBookChaptersById

▸ **getBookChaptersById**(`id`): `Promise`<[`Chapter`](../modules/chapters_types.md#chapter)[]\>

**`Description`**

Pings the LOTR API `/book/{id}/chapter` endpoint and returns an array of chapters from the requested Lord of the Rings book.

**`Memberof`**

Books

**`Example`**

```ts
const chapter = await sdk.books.getBookChaptersById('5cf5805fb53e011a64671582');
console.log(chapter);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The ID of the book to retrieve chapters from. |

#### Returns

`Promise`<[`Chapter`](../modules/chapters_types.md#chapter)[]\>

#### Defined in

[books/index.ts:51](https://github.com/hatchways-community/99659d2d3c9f461e87d7a6dd57ac5dbe/blob/49d789f/src/books/index.ts#L51)

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
