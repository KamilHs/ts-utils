type IndexOf<
  T extends any[],
  U extends any,
  I extends any[] = [],
> = T extends []
  ? -1
  : T extends [infer F, ...infer R]
  ? F extends U
    ? I['length']
    : IndexOf<R, U, [...I, any]>
  : -1;

type Res = IndexOf<[1, 2, 3], 2>; // expected to be 1
type Res1 = IndexOf<[2, 6, 3, 8, 4, 1, 7, 3, 9], 3>; // expected to be 2
type Res2 = IndexOf<[0, 0, 0], 2>; // expected to be -1

export {};
