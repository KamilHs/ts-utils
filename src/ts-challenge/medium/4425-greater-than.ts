type GreaterThan<
  T extends number,
  U extends number,
  N extends number[] = [],
> = T extends U
  ? false
  : N['length'] extends T
  ? false
  : N['length'] extends U
  ? true
  : GreaterThan<T, U, [...N, 1]>;

type A = GreaterThan<2, 1>; //should be true
type B = GreaterThan<1, 1>; //should be false
type C = GreaterThan<10, 100>; //should be false
type D = GreaterThan<111, 11>; //should be true

export {};
