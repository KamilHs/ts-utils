type FirstUniqueCharIndex<
  T extends string,
  I extends string[] = [],
> = T extends ''
  ? -1
  : T extends `${infer F}${infer R}`
  ? F extends I[number]
    ? FirstUniqueCharIndex<R, [...I, F]>
    : R extends `${string}${F}${string}`
    ? FirstUniqueCharIndex<R, [...I, F]>
    : I['length']
  : never;

type A = FirstUniqueCharIndex<'aabcc'>;

export {};
