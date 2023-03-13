type CapitalizeWords<T extends string> =
  T extends `${infer First extends string} ${infer Rest extends string}`
    ? `${Capitalize<First>} ${CapitalizeWords<Rest>}`
    : Capitalize<T>;

type capitalized = CapitalizeWords<'hello world, my friends'>; // expected to be 'Hello World, My Friends'

export {};
