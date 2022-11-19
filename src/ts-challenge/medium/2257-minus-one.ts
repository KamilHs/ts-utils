type Arr<N extends number, T extends any[] = []> = T['length'] extends N
  ? T
  : Arr<N, [...T, any]>;

type MinusOne<N extends number> = Arr<N> extends [any, ...infer U]
  ? U['length']
  : never;

type Zero = MinusOne<1>; // 0
type FiftyFour = MinusOne<55>; // 54

export {};
