type Integer<T extends number> = `${T}` extends `${number}.${number}`
  ? never
  : T;

type A = Integer<123.4>;
type B = Integer<123>;

export {};
