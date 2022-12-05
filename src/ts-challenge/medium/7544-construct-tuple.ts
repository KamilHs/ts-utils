type ConstructTuple<
  N extends number,
  T extends any[] = [],
> = T['length'] extends N ? T : ConstructTuple<N, [...T, unknown]>;

type result = ConstructTuple<2>; // expect to be [unknown, unkonwn]

export {};
