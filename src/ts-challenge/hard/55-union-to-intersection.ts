type Union2Intersection<U> = (U extends any ? (k: U) => void : never) extends (
  k: infer I,
) => void
  ? I
  : never;

type D = Union2Intersection<'foo' | 42 | true>; // expected to be 'foo' & 42 & true

export {};
