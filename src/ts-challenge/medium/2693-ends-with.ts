type EndsWith<S extends string, P extends string> = S extends `${string}${P}`
  ? true
  : false;

type a = EndsWith<'abc', 'bc'>; // expected to be true
type b = EndsWith<'abc', 'abc'>; // expected to be true
type c = EndsWith<'abc', 'd'>; // expected to be false

export {};
