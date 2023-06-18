[@unomaas/the-one-sdk](../README.md) / [Exports](../modules.md) / [index](../modules/index.md) / LotrSDK

# Class: LotrSDK

[index](../modules/index.md).LotrSDK

## Hierarchy

- [`Base`](base.Base.md)

  ↳ **`LotrSDK`**

## Table of contents

### Constructors

- [constructor](index.LotrSDK.md#constructor)

### Properties

- [books](index.LotrSDK.md#books)
- [chapters](index.LotrSDK.md#chapters)
- [characters](index.LotrSDK.md#characters)
- [movies](index.LotrSDK.md#movies)
- [quotes](index.LotrSDK.md#quotes)

### Methods

- [invoke](index.LotrSDK.md#invoke)

## Constructors

### constructor

• **new LotrSDK**(`config`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `Object` |
| `config.apiKey` | `string` |
| `config.baseUrl` | `string` |

#### Overrides

[Base](base.Base.md).[constructor](base.Base.md#constructor)

#### Defined in

[index.ts:17](https://github.com/hatchways-community/99659d2d3c9f461e87d7a6dd57ac5dbe/blob/49d789f/src/index.ts#L17)

## Properties

### books

• **books**: [`Books`](books.Books.md)

#### Defined in

[index.ts:11](https://github.com/hatchways-community/99659d2d3c9f461e87d7a6dd57ac5dbe/blob/49d789f/src/index.ts#L11)

___

### chapters

• **chapters**: [`Chapters`](chapters.Chapters.md)

#### Defined in

[index.ts:12](https://github.com/hatchways-community/99659d2d3c9f461e87d7a6dd57ac5dbe/blob/49d789f/src/index.ts#L12)

___

### characters

• **characters**: [`Characters`](characters.Characters.md)

#### Defined in

[index.ts:13](https://github.com/hatchways-community/99659d2d3c9f461e87d7a6dd57ac5dbe/blob/49d789f/src/index.ts#L13)

___

### movies

• **movies**: [`Movies`](movies.Movies.md)

#### Defined in

[index.ts:14](https://github.com/hatchways-community/99659d2d3c9f461e87d7a6dd57ac5dbe/blob/49d789f/src/index.ts#L14)

___

### quotes

• **quotes**: [`Quotes`](quotes.Quotes.md)

#### Defined in

[index.ts:15](https://github.com/hatchways-community/99659d2d3c9f461e87d7a6dd57ac5dbe/blob/49d789f/src/index.ts#L15)

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

#### Inherited from

[Base](base.Base.md).[invoke](base.Base.md#invoke)

#### Defined in

[base.ts:21](https://github.com/hatchways-community/99659d2d3c9f461e87d7a6dd57ac5dbe/blob/49d789f/src/base.ts#L21)
