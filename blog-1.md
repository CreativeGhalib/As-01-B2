# `any` vs `unknown` in TypeScript and Type Narrowing

When I started learning TypeScript, I used `any` a lot just to avoid errors. It felt fine at first but later I realized it was basically turning off TypeScript's type checking. That defeats the whole purpose.

In this blog I want to explain why `any` is risky, why `unknown` is better, and how type narrowing helps us use `unknown` safely.

## Why `any` is a problem

When you type something as `any`, TypeScript stops checking it completely. So you won't get any error even if you do something wrong:

```typescript
function processInput(value: any) {
  return value.toUpperCase();
}

processInput(42); // crashes at runtime, no error at compile time
```

This is dangerous because the bug only shows up when the app is running, not when writing code.

## `unknown` is safer

`unknown` also means the type is not known, but it forces you to check the type before using the value:

```typescript
function processInput(value: unknown) {
  return value.toUpperCase(); // TypeScript gives error here
}
```

TypeScript won't let you do anything with an `unknown` value until you prove what type it is. That's actually helpful.

## Type Narrowing

Type narrowing means checking the type of a value before using it. Once you check, TypeScript knows the type inside that block.

Using `typeof`:

```typescript
function formatValue(value: unknown): string {
  if (typeof value === 'string') {
    return value.toUpperCase();
  }
  if (typeof value === 'number') {
    return value.toFixed(2);
  }
  return String(value);
}
```

Using a custom type guard:

```typescript
interface User {
  id: number;
  name: string;
}

function isUser(value: unknown): value is User {
  return typeof value === 'object' && value !== null && 'id' in value && 'name' in value;
}

function greetUser(value: unknown): string {
  if (isUser(value)) {
    return `Hello, ${value.name}!`;
  }
  return 'Hello, stranger!';
}
```

The `value is User` part is what makes it a type guard. When the function returns `true`, TypeScript treats the value as a `User` inside that block.

## To summarize

`any` skips all checks and can cause bugs that are hard to find. `unknown` keeps the safety but asks you to check the type first. Type narrowing is just the process of doing that check before using the value.
