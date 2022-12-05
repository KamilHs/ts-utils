type NumberRange<
  S extends number,
  E extends number,
  T extends unknown[] = [],
  Started extends boolean = false,
> = T['length'] extends E
  ? E
  : T['length'] extends S
  ? S | NumberRange<S, E, [...T, unknown], true>
  : Started extends true
  ? T['length'] | NumberRange<S, E, [...T, unknown], Started>
  : NumberRange<S, E, [...T, unknown]>;

type result = NumberRange<2, 9>; //  | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
export {};
