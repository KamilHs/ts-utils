type Trim<T extends string> = T extends ` ${infer A}`
  ? A extends `${infer B} `
    ? Trim<B>
    : Trim<A>
  : T;
type trimmed = Trim<'  Hello World  '>; // expected to be 'Hello World'
