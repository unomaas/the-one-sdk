[@unomaas/the-one-sdk](../README.md) / [Exports](../modules.md) / [quotes](../modules/quotes.md) / Quotes

# Class: Quotes

[quotes](../modules/quotes.md).Quotes

## Hierarchy

- [`Base`](base.Base.md)

  ↳ **`Quotes`**

## Table of contents

### Constructors

- [constructor](quotes.Quotes.md#constructor)

### Methods

- [getAllQuotes](quotes.Quotes.md#getallquotes)
- [getQuoteById](quotes.Quotes.md#getquotebyid)
- [invoke](quotes.Quotes.md#invoke)

## Constructors

### constructor

• **new Quotes**(`config`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `Config` |

#### Inherited from

[Base](base.Base.md).[constructor](base.Base.md#constructor)

#### Defined in

[base.ts:15](https://github.com/hatchways-community/99659d2d3c9f461e87d7a6dd57ac5dbe/blob/7e7948f/src/base.ts#L15)

## Methods

### getAllQuotes

▸ **getAllQuotes**(): `Promise`<[`Quote`](../modules/quotes_types.md#quote)[]\>

**`Description`**

Pings the LOTR API `/quote` endpoint and returns an array of Lord of the Rings quotes.

**`Memberof`**

Quotes

**`Example`**

```ts
const quotes = await sdk.quotes.getAllQuotes();
console.log(quotes);
```

#### Returns

`Promise`<[`Quote`](../modules/quotes_types.md#quote)[]\>

#### Defined in

[quotes/index.ts:18](https://github.com/hatchways-community/99659d2d3c9f461e87d7a6dd57ac5dbe/blob/7e7948f/src/quotes/index.ts#L18)

___

### getQuoteById

▸ **getQuoteById**(`id`): `Promise`<[`Quote`](../modules/quotes_types.md#quote)\>

**`Description`**

Pings the LOTR API `/quote/{id}` endpoint and returns the requested Lord of the Rings quote.

**`Memberof`**

Quotes

**`Example`**

```ts
const quote = await sdk.quotes.getQuoteById('5cd96e05de30eff6ebcce7e9');
console.log(quote);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The ID of the quote to retrieve. |

#### Returns

`Promise`<[`Quote`](../modules/quotes_types.md#quote)\>

#### Defined in

[quotes/index.ts:34](https://github.com/hatchways-community/99659d2d3c9f461e87d7a6dd57ac5dbe/blob/7e7948f/src/quotes/index.ts#L34)

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

[base.ts:21](https://github.com/hatchways-community/99659d2d3c9f461e87d7a6dd57ac5dbe/blob/7e7948f/src/base.ts#L21)
