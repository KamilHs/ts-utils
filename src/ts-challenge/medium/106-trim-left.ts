type TrimLeft<T extends string> = T extends ` ${infer A}` ? TrimLeft<A> : T;

type trimed = TrimLeft<'  Hello World  '>; // expected to be 'Hello World  '
