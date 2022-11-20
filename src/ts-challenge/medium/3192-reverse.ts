type Reverse<T extends any[]> = T extends [...infer Rest, infer Tail]
  ? [Tail, ...Reverse<Rest>]
  : [];

type a = Reverse<['a', 'b']>; // ['b', 'a']
type b = Reverse<['a', 'b', 'c']>; // ['c', 'b', 'a']

export {};
