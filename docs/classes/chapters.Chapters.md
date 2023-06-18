[@unomaas/the-one-sdk](../README.md) / [Exports](../modules.md) / [chapters](../modules/chapters.md) / Chapters

# Class: Chapters

[chapters](../modules/chapters.md).Chapters

## Hierarchy

- [`Base`](base.Base.md)

  ↳ **`Chapters`**

## Table of contents

### Constructors

- [constructor](chapters.Chapters.md#constructor)

### Methods

- [getAllChapters](chapters.Chapters.md#getallchapters)
- [getChapterById](chapters.Chapters.md#getchapterbyid)
- [invoke](chapters.Chapters.md#invoke)

## Constructors

### constructor

• **new Chapters**(`config`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `Config` |

#### Inherited from

[Base](base.Base.md).[constructor](base.Base.md#constructor)

#### Defined in

[base.ts:15](https://github.com/hatchways-community/99659d2d3c9f461e87d7a6dd57ac5dbe/blob/49d789f/src/base.ts#L15)

## Methods

### getAllChapters

▸ **getAllChapters**(): `Promise`<[`Chapter`](../modules/chapters_types.md#chapter)[]\>

**`Description`**

Pings the LOTR API `/chapter` endpoint and returns an array of Lord of the Rings chapters.

**`Memberof`**

Chapters

**`Example`**

```ts
const chapters = await sdk.chapters.getAllChapters();
console.log(chapters);
```

#### Returns

`Promise`<[`Chapter`](../modules/chapters_types.md#chapter)[]\>

#### Defined in

[chapters/index.ts:18](https://github.com/hatchways-community/99659d2d3c9f461e87d7a6dd57ac5dbe/blob/49d789f/src/chapters/index.ts#L18)

___

### getChapterById

▸ **getChapterById**(`id`): `Promise`<[`Chapter`](../modules/chapters_types.md#chapter)\>

**`Description`**

Pings the LOTR API `/chapter/{id}` endpoint and returns the requested Lord of the Rings chapter.

**`Memberof`**

Chapters

**`Example`**

```ts
const chapter = await sdk.chapters.getChapterById('6091b6d6d58360f988133ba1');
console.log(chapter);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The ID of the chapter to retrieve. |

#### Returns

`Promise`<[`Chapter`](../modules/chapters_types.md#chapter)\>

#### Defined in

[chapters/index.ts:34](https://github.com/hatchways-community/99659d2d3c9f461e87d7a6dd57ac5dbe/blob/49d789f/src/chapters/index.ts#L34)

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
