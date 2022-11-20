type TupleToNestedObject<T extends string[], U> = T extends [
  infer K extends string,
  ...infer Rest extends string[],
]
  ? {
      [P in K]: TupleToNestedObject<Rest, U>;
    }
  : U;

type a = TupleToNestedObject<['a'], string>; // {a: string}
type b = TupleToNestedObject<['a', 'b'], number>; // {a: {b: number}}
type c = TupleToNestedObject<[], boolean>; // boolean. if the tuple is empty, just return the U type

export {};
