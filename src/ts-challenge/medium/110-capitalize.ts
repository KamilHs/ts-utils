type MyCapitalize<T extends string> = T extends `${infer F}${infer Rest}`
  ? `${Uppercase<F>}${Rest}`
  : T;

type capitalized = MyCapitalize<'hello world'>; // expected to be 'Hello world'

export {};
