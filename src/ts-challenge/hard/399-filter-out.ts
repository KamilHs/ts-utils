type FilterOut<T extends unknown[], K, L extends unknown[] = []> = T extends [
  infer F,
  ...infer Rest,
]
  ? F extends K
    ? FilterOut<Rest, K, L>
    : FilterOut<Rest, K, [...L, F]>
  : L

type Filtered = FilterOut<[1, 2, null, 3], null>; // [1, 2, 3]

export {};
