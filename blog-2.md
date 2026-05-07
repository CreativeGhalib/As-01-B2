# Generics in TypeScript

When I first saw `<T>` in TypeScript code I had no idea what it meant. After learning about generics I realized it's one of the most useful features in the language. It lets you write a function or class once and use it with any type safely.

## The problem without generics

Suppose you want a function that wraps a value in an array. Without generics you have to write separate functions for each type:

```typescript
function wrapString(value: string): string[] {
  return [value];
}

function wrapNumber(value: number): number[] {
  return [value];
}
```

This is repetitive. If you use `any` to avoid repeating:

```typescript
function wrap(value: any): any[] {
  return [value];
}
```

It works but you lose all type information. TypeScript can't help you anymore with what comes out.

## How generics fix this

`<T>` is a type placeholder. You pass the actual type when you call the function:

```typescript
function wrap<T>(value: T): T[] {
  return [value];
}

wrap('hello'); // string[]
wrap(42); // number[]
```

Same function, works for any type, and TypeScript still knows the return type.

## Adding constraints

You can limit what types are allowed using `extends`:

```typescript
function getLength<T extends { length: number }>(value: T): number {
  return value.length;
}

getLength('hello'); // 5
getLength([1, 2, 3]); // 3
getLength(42); // Error
```

This is also how `getProperty` works in our assignment — `K extends keyof T` makes sure the key actually exists on the object:

```typescript
const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
  return obj[key];
};
```

## Generic interfaces

Generics work in interfaces too. A common use case is an API response wrapper:

```typescript
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}
```

Now you can reuse this for any response shape — user, product, order, anything.

## Conclusion

Once you get used to generics you'll start using them naturally whenever you need the same logic to work for different types. It's one of those things that feels confusing at first but makes a lot of sense once you actually write it yourself.
