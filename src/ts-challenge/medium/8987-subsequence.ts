type Subsequence<T extends unknown[]> = T extends [infer F, ...infer R]
  ? [F] | [F, ...Subsequence<R>] | Subsequence<R>
  : [];

type A = Subsequence<[1, 2, 3, 4]>; // [] | [1] | [2] | [1, 2]

export {};
