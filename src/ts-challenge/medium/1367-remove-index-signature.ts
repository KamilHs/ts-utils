type RemoveIndexSignature<T> = {
  [Key in keyof T as Key extends `${infer _}` ? Key : never]: T[Key];
};

type Foo = {
  [key: string]: any;
  foo(): void;
};

type A = RemoveIndexSignature<Foo>; // expected { foo(): void }

export {};
