type GetMiddleElement<T extends unknown[]> = T extends [
  unknown,
  ...infer R,
  unknown,
]
  ? R['length'] extends 1 | 2
    ? R
    : GetMiddleElement<R>
  : T;

type simple1 = GetMiddleElement<[1, 2, 3, 4, 5]>; // expected to be [3]
type simple2 = GetMiddleElement<[1, 2, 3, 4, 5, 6]>; // expected to be [3, 4]

export {};
