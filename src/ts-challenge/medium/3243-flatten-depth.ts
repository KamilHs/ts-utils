type FlattenOnce<T extends any[]> = T extends [infer F, ...infer R]
  ? [...(F extends [...infer K] ? K : [F]), ...FlattenOnce<R>]
  : T;
type FlattenDepth<
  T,
  U extends number = 1,
  V extends any[] = [],
> = T extends any[]
  ? V extends { length: U }
    ? T
    : T extends FlattenOnce<T>
    ? T
    : FlattenDepth<FlattenOnce<T>, U, [...V, any]>
  : never;

type a = FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2>; // [1, 2, 3, 4, [5]]. flatten 2 times
type b = FlattenDepth<[1, 2, [3, 4], [[[5]]]]>; // [1, 2, 3, 4, [[5]]]. Depth defaults to be 1

export {};
