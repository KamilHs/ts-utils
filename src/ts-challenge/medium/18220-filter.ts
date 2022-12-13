type Filter<T extends unknown[], Predicate> = T extends [infer F, ...infer R]
  ? F extends Predicate
    ? [F, ...Filter<R, Predicate>]
    : Filter<R, Predicate>
  : T;

type A = Filter<[1, 2, 3], number>;
type B = Filter<[1, 2, 3], 1 | 3>;
