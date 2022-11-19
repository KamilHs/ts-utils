type Length<
  S extends string,
  T extends any[] = [],
> = S extends `${string}${infer Rest}`
  ? Length<Rest, [...T, any]>
  : T['length'];

type l = Length<'abc'>;

export {};
