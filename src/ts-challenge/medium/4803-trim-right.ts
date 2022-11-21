type TrimRight<S extends string> = S extends `${infer F} ` ? TrimRight<F> : S;

type Trimed = TrimRight<'   Hello World    '>; // expected to be '   Hello World'

export {};
