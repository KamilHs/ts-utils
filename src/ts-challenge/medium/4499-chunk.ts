type Chunk<
  T extends any[],
  N extends number,
  R extends any[] = [],
> = T extends []
  ? R extends []
    ? R
    : [R]
  : T extends [infer F, ...infer Rest]
  ? [...R, F] extends infer NR extends any[]
    ? N extends NR['length']
      ? [NR, ...Chunk<Rest, N>]
      : Chunk<Rest, N, NR>
    : never
  : T;

type exp1 = Chunk<[1, 2, 3], 2>; // expected to be [[1, 2], [3]]
type exp2 = Chunk<[1, 2, 3], 4>; // expected to be [[1, 2, 3]]
type exp3 = Chunk<[1, 2, 3], 1>; // expected to be [[1], [2], [3]]

export {};
