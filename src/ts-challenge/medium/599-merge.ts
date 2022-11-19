type Merge<T, U> = Omit<T, keyof U> & U extends infer R
  ? {
      [K in keyof R]: R[K];
    }
  : never;

type foo = {
  name: string;
  age: string;
};
type coo = {
  age: number;
  sex: string;
};

type Result = Merge<foo, coo>; // expected to be {name: string, age: number, sex: string}

export {};
