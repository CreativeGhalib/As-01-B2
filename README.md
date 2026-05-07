# Assignment 01 - TypeScript

This is my first TypeScript assignment from the Programming Hero course. Here I tried to solve 7 problems using TypeScript and also wrote 2 blog posts on TypeScript related topics.

## What's inside

```
├── solutions.ts   --> all 7 problem solutions
├── blog-1.md      --> blog about any vs unknown and type narrowing
├── blog-2.md      --> blog about Generics
└── README.md
```

## Problems I solved

1. **filterEvenNumbers** - filter only even numbers from an array
2. **reverseString** - reverse a string
3. **checkType** - check if a value is string or number using union type
4. **getProperty** - generic function to get object property safely
5. **toggleReadStatus** - work with interface and add a new property
6. **Person & Student class** - class and inheritance example
7. **getIntersection** - find common elements between two arrays

## Blog Posts

- `blog-1.md` — wrote about why `any` is risky and `unknown` is better, also explained type narrowing
- `blog-2.md` — wrote about how Generics work and why they are useful

## How to run

First install typescript if you don't have it:

```bash
npm install -g typescript
```

Then compile:

```bash
tsc solutions.ts
```

Or just run directly with ts-node:

```bash
npx ts-node solutions.ts
```
