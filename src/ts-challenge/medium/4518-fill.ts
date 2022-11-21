type Fill<
  T extends any[],
  N extends any,
  Start extends number = 0,
  End extends number = -1,
  I extends any[] = [],
  Started extends boolean = Start extends 0 ? true : false,
> = T extends []
  ? T
  : End extends I['length']
  ? T
  : T extends [infer F, ...infer R]
  ? Started extends true
    ? [N, ...Fill<R, N, Start, End, [...I, any], Started>]
    : Start extends I['length']
    ? [N, ...Fill<R, N, Start, End, [...I, any], true>]
    : [F, ...Fill<R, N, Start, End, [...I, any]>]
  : T;

type exp = Fill<[1, 2, 3], 0>; // expected to be [0, 0, 0]

export {};
