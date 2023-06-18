[@unomaas/the-one-sdk](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / Base

# Class: Base

[base](../modules/base.md).Base

## Hierarchy

- **`Base`**

  ↳ [`LotrSDK`](index.LotrSDK.md)

  ↳ [`Books`](books.Books.md)

  ↳ [`Chapters`](chapters.Chapters.md)

  ↳ [`Characters`](characters.Characters.md)

  ↳ [`Movies`](movies.Movies.md)

  ↳ [`Quotes`](quotes.Quotes.md)

## Table of contents

### Constructors

- [constructor](base.Base.md#constructor)

### Properties

- [apiKey](base.Base.md#apikey)
- [baseUrl](base.Base.md#baseurl)

### Methods

- [invoke](base.Base.md#invoke)

## Constructors

### constructor

• **new Base**(`config`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `Config` |

#### Defined in

[base.ts:15](https://github.com/hatchways-community/99659d2d3c9f461e87d7a6dd57ac5dbe/blob/49d789f/src/base.ts#L15)

## Properties

### apiKey

• `Private` **apiKey**: `string`

#### Defined in

[base.ts:11](https://github.com/hatchways-community/99659d2d3c9f461e87d7a6dd57ac5dbe/blob/49d789f/src/base.ts#L11)

___

### baseUrl

• `Private` **baseUrl**: `string`

#### Defined in

[base.ts:12](https://github.com/hatchways-community/99659d2d3c9f461e87d7a6dd57ac5dbe/blob/49d789f/src/base.ts#L12)

## Methods

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

#### Defined in

[base.ts:21](https://github.com/hatchways-community/99659d2d3c9f461e87d7a6dd57ac5dbe/blob/49d789f/src/base.ts#L21)
