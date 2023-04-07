type _Enum<
  T extends string[],
  IsNumerical extends boolean = false,
  Acc extends unknown[] = [],
> = T extends [infer F extends string, ...infer Rest extends string[]]
  ? Record<Capitalize<F>, IsNumerical extends true ? Acc['length'] : F> &
      _Enum<Rest, IsNumerical, [...Acc, unknown]>
  : {};

type Enum<T extends string[], IsNumerical extends boolean = false> = _Enum<
  T,
  IsNumerical
> extends infer R
  ? {
      readonly [K in keyof R]: R[K];
    }
  : never;

type case1 = Enum<['macOS', 'Windows', 'Linux']>;
type case2 = Enum<['macOS', 'Windows', 'Linux'], true>;

export {};
