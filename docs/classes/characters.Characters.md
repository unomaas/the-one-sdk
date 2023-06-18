[@unomaas/the-one-sdk](../README.md) / [Exports](../modules.md) / [characters](../modules/characters.md) / Characters

# Class: Characters

[characters](../modules/characters.md).Characters

## Hierarchy

- [`Base`](base.Base.md)

  ↳ **`Characters`**

## Table of contents

### Constructors

- [constructor](characters.Characters.md#constructor)

### Methods

- [getAllCharacters](characters.Characters.md#getallcharacters)
- [getCharacterById](characters.Characters.md#getcharacterbyid)
- [getCharacterQuotesById](characters.Characters.md#getcharacterquotesbyid)
- [invoke](characters.Characters.md#invoke)

## Constructors

### constructor

• **new Characters**(`config`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `Config` |

#### Inherited from

[Base](base.Base.md).[constructor](base.Base.md#constructor)

#### Defined in

[base.ts:15](https://github.com/hatchways-community/99659d2d3c9f461e87d7a6dd57ac5dbe/blob/49d789f/src/base.ts#L15)

## Methods

### getAllCharacters

▸ **getAllCharacters**(): `Promise`<[`Character`](../modules/characters_types.md#character)[]\>

**`Description`**

Pings the LOTR API `/character` endpoint and returns an array of Lord of the Rings characters.

**`Memberof`**

Characters

**`Example`**

```ts
const characters = await sdk.characters.getAllCharacters();
console.log(characters);
```

#### Returns

`Promise`<[`Character`](../modules/characters_types.md#character)[]\>

#### Defined in

[characters/index.ts:19](https://github.com/hatchways-community/99659d2d3c9f461e87d7a6dd57ac5dbe/blob/49d789f/src/characters/index.ts#L19)

___

### getCharacterById

▸ **getCharacterById**(`id`): `Promise`<[`Character`](../modules/characters_types.md#character)\>

**`Description`**

Pings the LOTR API `/character/{id}` endpoint and returns the requested Lord of the Rings character.

**`Memberof`**

Characters

**`Example`**

```ts
const character = await sdk.characters.getCharacterById('5cd99d4bde30eff6ebccfbbe');
console.log(character);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The ID of the character to retrieve. |

#### Returns

`Promise`<[`Character`](../modules/characters_types.md#character)\>

#### Defined in

[characters/index.ts:35](https://github.com/hatchways-community/99659d2d3c9f461e87d7a6dd57ac5dbe/blob/49d789f/src/characters/index.ts#L35)

___

### getCharacterQuotesById

▸ **getCharacterQuotesById**(`id`): `Promise`<[`Quote`](../modules/quotes_types.md#quote)[]\>

**`Description`**

Pings the LOTR API `/character/{id}/quote` endpoint and returns an array of quotes from the requested Lord of the Rings character.

**`Memberof`**

Quotes

**`Example`**

```ts
const quotes = await sdk.characters.getCharacterQuotesById('5cd99d4bde30eff6ebccfbbe');
console.log(quotes);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The ID of the character to retrieve quotes from. |

#### Returns

`Promise`<[`Quote`](../modules/quotes_types.md#quote)[]\>

#### Defined in

[characters/index.ts:51](https://github.com/hatchways-community/99659d2d3c9f461e87d7a6dd57ac5dbe/blob/49d789f/src/characters/index.ts#L51)

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
