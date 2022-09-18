type Arr<N extends number, T extends any[] = []> = T['length'] extends N
  ? T
  : Arr<N, [...T, any]>;

export type Increment<N extends number> = [...Arr<N>, any]['length'];
export type Decrement<N extends number> = Arr<N> extends [any, ...infer U]
  ? U['length']
  : never;
