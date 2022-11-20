type Fibonacci<
  T extends number,
  N extends number[] = [1],
  Res extends number[] = [1],
  Cur extends number[] = [1],
> = N['length'] extends T
  ? Res['length']
  : Fibonacci<T, [...N, 1], Cur, [...Res, ...Cur]>;

type Result1 = Fibonacci<3>; // 2
type Result2 = Fibonacci<8>; // 21

export {};
