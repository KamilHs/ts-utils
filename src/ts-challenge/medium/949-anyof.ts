type AnyOf<T extends any[]> = T extends []
  ? false
  : T extends [infer Head, ...infer Rest]
  ? Head extends 0 | '' | false | [] | Record<string, never> | undefined | null
    ? AnyOf<Rest>
    : true
  : never;

type Sample1 = AnyOf<[1, '', false, [], {}]>; // expected to be true.
type Sample2 = AnyOf<[0, '', false, [], {}]>; // expected to be false.

export {};
